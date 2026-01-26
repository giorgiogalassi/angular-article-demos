import { Component, computed, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-date-input-demo',
  imports: [FormField],
  template: `
    <label>
      Event date
      <input type="date" [formField]="eventForm.eventDate" />
    </label>
    <p>ISO string: {{ eventForm.eventDate().value() }}</p>
    <p>Date object: {{ eventDateObj() }}</p>
  `,
})
export class DateInputDemoComponent {
  model = signal({ eventDate: '2026-01-25' });
  eventForm = form(this.model);
  eventDateObj = computed(() => new Date(this.eventForm.eventDate().value()));
}
