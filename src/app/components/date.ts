import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';

@Component({
  selector: 'app-date',
  template: `
    <input type="date" [formField]="form.date" />
    <button type="button" (click)="logDate()">Log Date</button>
  `,
  imports: [FormField],
})
export class DateComponent {
  model = signal({ date: '' }); // ISO string: YYYY-MM-DD
  form = form(this.model);

  logDate(): void {
    console.log(new Date(this.model().date));
  }
}
