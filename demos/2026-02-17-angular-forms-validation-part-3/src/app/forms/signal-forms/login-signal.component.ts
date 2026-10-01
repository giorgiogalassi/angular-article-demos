import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login-signal',
  standalone: true,
  imports: [FormField],
  template: `
    <h3>Signal Forms: Baseline Login</h3>
    <p>This snippet binds inputs to signal-backed fields generated from a model signal.</p>
    <form (ngSubmit)="submit()">
      <label>
        Email
        <input [formField]="loginForm.email" />
      </label>
      <label>
        Password
        <input type="password" [formField]="loginForm.password" />
      </label>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginSignalComponent {
  model = signal({ email: '', password: '' });
  loginForm = form(this.model);

  submit(): void {
    console.log('submit', this.model());
  }
}
