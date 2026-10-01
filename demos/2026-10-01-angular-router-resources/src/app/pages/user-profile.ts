import { Component, inject, input, Resource, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Activity, User } from '../demo-api';

@Component({
  selector: 'app-user-profile',
  imports: [RouterOutlet],
  template: `
    <h2>{{ user().name }}</h2>
    <p class="hint">Blocking resource: the input is the <strong>value</strong>, so it's never missing here.</p>

    <button (click)="refresh()">Reload user (no re-navigation)</button>
    @if (lastReload() !== null) {
      <small>reload() returned <code>{{ lastReload() }}</code></small>
    }

    <h3>Activity <small>(non-blocking)</small></h3>
    <p class="hint">Non-blocking resource: the input is the whole <strong>Resource</strong>, so the template handles loading and errors.</p>
    @if (activity().isLoading()) {
      <p>Loading activity…</p>
    } @else if (activity().error(); as error) {
      <p class="error">Activity failed: {{ error.message }}. The navigation still completed.</p>
    } @else if (activity().hasValue()) {
      <ul>
        @for (item of activity().value(); track item.id) {
          <li>{{ item.text }}</li>
        }
      </ul>
    }

    <router-outlet />
  `,
})
export class UserProfile {
  readonly user = input.required<User>(); // blocking → the value
  readonly activity = input.required<Resource<Activity[]>>(); // non-blocking → the resource

  private readonly userResource = inject(ActivatedRoute).resources?.['user'];
  protected readonly lastReload = signal<boolean | null>(null);

  refresh() {
    // returns false while a navigation is in flight
    this.lastReload.set(this.userResource?.reload() ?? null);
  }
}
