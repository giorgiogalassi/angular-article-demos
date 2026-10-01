import { Component, inject, resource, signal } from '@angular/core';
import { ErrorLog } from './error-log';
import { ChartDashboard, ChartError, Order, OrderSummary, RevenueChart } from './widgets';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Component({
  selector: 'app-root',
  imports: [RevenueChart, ChartDashboard, OrderSummary],
  template: `
    <h1>&#64;boundary in practice</h1>
    <p class="hint">Angular 22.2 · developer preview. Every error below also shows up in the log at the bottom.</p>

    <!-- 1. The basics: $error and $reset() -->
    <section>
      <h2>1. <code>$error</code> and <code>$reset()</code></h2>
      <label><input type="checkbox" [checked]="crashChart()" (change)="crashChart.set(!crashChart())" /> make the chart throw</label>

      @boundary {
        <app-revenue-chart [crash]="crashChart()" />
      } @error {
        <div class="fallback">
          The chart couldn't load: {{ $error.message }}
          <button (click)="$reset()">Try again</button>
        </div>
      }
      <p class="hint">"Try again" only helps once the cause is gone: untick the box first, otherwise it fails again.</p>
    </section>

    <!-- 2. Several @error blocks, picked by when -->
    <section>
      <h2>2. Several <code>&#64;error</code> blocks with <code>when</code></h2>
      <select (change)="dashboardFailure.set($any($event.target).value)">
        <option value="none">no error</option>
        <option value="chart">throw a ChartError</option>
        <option value="other">throw a plain Error</option>
      </select>

      @boundary {
        <app-chart-dashboard [failWith]="dashboardFailure()" />
      } @error (let err; retry = $reset; when isChartError(err)) {
        <div class="fallback">
          Chart-specific fallback: {{ err.message }}
          <button (click)="retry()">Retry</button>
        </div>
      } @error {
        <div class="fallback">
          Generic fallback: {{ $error.message }}
          <button (click)="$reset()">Retry</button>
        </div>
      }
      <p class="hint">The first <code>&#64;error</code> whose <code>when</code> is truthy wins. The unconditional one has to come last.</p>
    </section>

    <!-- 3. Resources: value() throws in the error state -->
    <section>
      <h2>3. An errored <code>resource()</code></h2>
      <label><input type="checkbox" [checked]="failOrder()" (change)="failOrder.set(!failOrder())" /> make the order request fail</label>
      <label><input type="checkbox" [checked]="loadingGuard()" (change)="loadingGuard.set(!loadingGuard())" /> loading guard</label>
      <button (click)="order.reload()">Reload order</button>
      <span class="hint">status: <code>{{ order.status() }}</code></span>

      @boundary {
        @if (loadingGuard() && order.isLoading() && !order.hasValue()) {
          <p>Loading order…</p>
        } @else {
          <app-order-summary [order]="order.value()!" />
        }
      } @error {
        <div class="fallback">
          We couldn't load this order: {{ $error.message }}
          <button (click)="order.reload(); $reset()">Retry: reload(); $reset()</button>
          <button (click)="retryOrder($reset)">Retry: reload, wait, then $reset()</button>
        </div>
      }
      <p class="hint">
        <code>order.value()</code> throws while the resource is in error, and the boundary catches it. But after an
        error it is <code>undefined</code> while reloading. Untick "loading guard", make the request fail, reload, then
        untick the failure and press the first retry: it resets while the resource is still reloading, the child
        crashes on <code>undefined</code>, and the fallback comes straight back. The second retry waits, so it works
        with or without the guard. (Without the guard, the very first page load hits the same crash.)
      </p>
    </section>

    <!-- 4. What a boundary does not catch -->
    <section>
      <h2>4. Event handlers are not caught</h2>
      @boundary {
        <div class="card">
          This button is inside a boundary.
          <button (click)="explode()">Throw from a click handler</button>
        </div>
      } @error {
        <div class="fallback">You won't see this fallback.</div>
      }
      <p class="hint">The error goes to <code>ErrorHandler.handleError</code>, not to <code>&#64;error</code>. The boundary protects rendering, not interaction.</p>
    </section>

    <section class="log">
      <h2>Error log</h2>
      @for (entry of errorLog.entries(); track $index) {
        <div>
          <code>{{ entry.source }}</code> {{ entry.message }}
          @if (entry.detail) {
            <small>({{ entry.detail }})</small>
          }
        </div>
      } @empty {
        <p class="hint">Nothing yet.</p>
      }
    </section>
  `,
})
export class App {
  protected readonly errorLog = inject(ErrorLog);

  protected readonly crashChart = signal(false);
  protected readonly dashboardFailure = signal<'none' | 'chart' | 'other'>('none');
  protected readonly failOrder = signal(false);
  protected readonly loadingGuard = signal(true);

  protected readonly order = resource({
    loader: async (): Promise<Order> => {
      await delay(800);
      if (this.failOrder()) throw new Error('Order service returned 500');
      return { id: 1042, total: '€ 89.90' };
    },
  });

  protected isChartError(error: unknown): boolean {
    return error instanceof ChartError;
  }

  /** Reload first, and reset only once the resource has settled, so the boundary re-renders against fresh data. */
  protected async retryOrder(reset: () => void) {
    this.order.reload();
    while (this.order.isLoading()) {
      await delay(50);
    }
    reset();
  }

  protected explode() {
    throw new Error('Click handler failed');
  }
}
