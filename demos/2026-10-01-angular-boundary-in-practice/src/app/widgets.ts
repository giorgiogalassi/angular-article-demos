import { Component, computed, input } from '@angular/core';

/** Throws while rendering when `crash` is true. */
@Component({
  selector: 'app-revenue-chart',
  template: `<div class="card">📈 Revenue this quarter: <strong>{{ total() }}</strong></div>`,
})
export class RevenueChart {
  readonly crash = input(false);
  protected readonly total = computed(() => {
    if (this.crash()) throw new Error('Revenue data is malformed');
    return '€ 128,400';
  });
}

export class ChartError extends Error {
  override name = 'ChartError';
}

/** Throws a ChartError or a plain Error, to show `when` picking the right @error block. */
@Component({
  selector: 'app-chart-dashboard',
  template: `<div class="card">📊 Dashboard: {{ status() }}</div>`,
})
export class ChartDashboard {
  readonly failWith = input<'none' | 'chart' | 'other'>('none');
  protected readonly status = computed(() => {
    const kind = this.failWith();
    if (kind === 'chart') throw new ChartError('Axis range could not be computed');
    if (kind === 'other') throw new Error('Something unrelated broke');
    return 'all charts rendered';
  });
}

export interface Order {
  id: number;
  total: string;
}

@Component({
  selector: 'app-order-summary',
  template: `<div class="card">🧾 Order #{{ order().id }}: {{ order().total }}</div>`,
})
export class OrderSummary {
  readonly order = input.required<Order>();
}
