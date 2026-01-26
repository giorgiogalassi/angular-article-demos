import { Component, effect, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-flow-demo',
  imports: [FormField],
  template: `
    <input [formField]="loginForm.email" placeholder="Email" />
    <button type="button" (click)="prefill()">Prefill</button>
    <p>Model: {{ model().email }}</p>
  `
})
export class SignalFlowDemoComponent {
  model = signal({ email: '' });
  loginForm = form(this.model);

  constructor() {
    effect(() => console.log('model.email:', this.model().email));
  }

  prefill(): void {
    this.loginForm.email().value.set('hello@angular.dev');
  }
}