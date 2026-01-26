import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';

@Component({
  selector: 'app-radio',
  template: `
    <label>
      <input type="radio" value="light" [formField]="form.theme" /> Light
    </label>
    <label>
      <input type="radio" value="dark" [formField]="form.theme" /> Dark
    </label>
  `,
  imports: [FormField]
})
export class RadioComponent {
  model = signal({ theme: 'light' });
  form = form(this.model);
}