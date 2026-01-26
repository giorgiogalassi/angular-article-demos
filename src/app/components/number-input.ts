import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';

@Component({
  selector: 'app-number-input',
  template: `
    <input type="number" [formField]="form.age" />
    <p>Age type: {{ typeof model().age }}</p>
  `,
  imports: [FormField],
})
export class NumberInputComponent {
  model = signal({ age: 0 });
  form = form(this.model);
}
