import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
  <section>
    <button type="button" (click)="add()">Add</button>
    {{ count() }}
    <button type="button" (click)="remove()">Remove</button>
  </section>
  `,
  styles: `
    section {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 16px;
    }
  `,
})
export default class CounterComponent {
  count = signal<number>(0);

  add() {
    console.log('Adding...');
    this.count.update((v) => (v += 1));
  }

  remove() {
    console.log('Removing...');
    this.count.update((v) => (v -= 1));
  }
}
