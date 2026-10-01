import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationError, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DemoApi } from './demo-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <a routerLink="/"><strong>Router Resources vs Resolvers</strong></a>
      <nav>
        <span>Router Resources:</span>
        <a routerLink="/resources/users/1/posts">user 1</a>
        <a routerLink="/resources/users/2/posts">user 2</a>
        <span>Resolvers:</span>
        <a routerLink="/resolvers/users/1/posts">user 1</a>
        <a routerLink="/resolvers/users/2/posts">user 2</a>
      </nav>
      <div class="toggles">
        <label><input type="checkbox" [checked]="api.failUser()" (change)="api.failUser.set(!api.failUser())" /> fail <code>user</code> (blocking)</label>
        <label><input type="checkbox" [checked]="api.failActivity()" (change)="api.failActivity.set(!api.failActivity())" /> fail <code>activity</code> (non-blocking)</label>
      </div>
    </header>

    @if (navigationError()) {
      <p class="nav-error">NavigationError: {{ navigationError() }}. The navigation was cancelled and the previous page stayed.</p>
    }

    <main>
      <section class="page">
        <!--
          A blocking resource only guarantees a value during navigation. If a later reload() fails,
          the bound input can't receive one and ResourceValueError is thrown on the active page.
          The boundary turns that into a fallback instead of a half-broken view.
        -->
        @boundary {
          <router-outlet />
        } @error {
          <p class="error">Caught by &#64;boundary: {{ $error.message }}</p>
          <button (click)="$reset()">$reset() only</button>
          <button (click)="retry($reset)">Reload failed resources, then $reset()</button>
          <p class="hint">
            <code>$reset()</code> alone re-renders against a resource that is still in error, so the fallback comes
            straight back. Untick "fail user" first, then use the second button.
          </p>
        }
      </section>
      <aside class="timeline">
        <h3>Timeline <small>(ms since the last navigation started)</small></h3>
        @for (entry of api.log(); track $index) {
          <div><code>{{ entry.at }}ms</code> {{ entry.message }}</div>
        } @empty {
          <p>Click a user link to start a navigation.</p>
        }
      </aside>
    </main>
  `,
})
export class App {
  protected readonly api = inject(DemoApi);
  protected readonly navigationError = signal<string | null>(null);
  private readonly router = inject(Router);

  /** Reload every route resource that is in error, wait for them to settle, then reset the boundary. */
  protected async retry(reset: () => void) {
    const failed = [];
    for (let route: ActivatedRoute | null = this.router.routerState.root; route; route = route.firstChild) {
      failed.push(...Object.values(route.resources ?? {}).filter((res) => res.error()));
    }
    failed.forEach((res) => res.reload());
    while (failed.some((res) => res.isLoading())) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    reset();
  }

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.api.resetTimeline();
        this.navigationError.set(null);
      }
      if (event instanceof NavigationError) {
        this.navigationError.set(event.error?.message ?? String(event.error));
      }
    });
  }
}
