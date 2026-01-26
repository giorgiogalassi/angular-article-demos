import { Component, effect, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-flow',
  template: `
    <input [formField]="form.email" />
  `,
  imports: [FormField],
})
export class SignalFlowComponent {
  model = signal({ email: '' });
  form = form(this.model);

  constructor() {
    effect(() => console.log(this.model().email));
  }
}
