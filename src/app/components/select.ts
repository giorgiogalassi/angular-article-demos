import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-select',
  template: `
    <select [formField]="form.country">
      @for (c of countries; track c) {
      <option [value]="c">{{ c }}</option>
    }
    </select>
  `,
  imports: [FormField],
})
export class SelectComponent {
  countries = ['IT', 'FR', 'DE'];
  model = signal({ country: 'IT' });
  form = form(this.model);
}
