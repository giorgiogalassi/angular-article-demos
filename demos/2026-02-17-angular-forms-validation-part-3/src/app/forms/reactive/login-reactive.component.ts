import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h3>Reactive: Baseline Login</h3>
    <p>This snippet binds each input to an explicit <code>FormControl</code>.</p>
    <form (ngSubmit)="submit()">
      <label>
        Email
        <input [formControl]="email" />
      </label>
      <label>
        Password
        <input type="password" [formControl]="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginReactiveComponent {
  email = new FormControl('', { nonNullable: true });
  password = new FormControl('', { nonNullable: true });

  submit(): void {
    console.log('submit', {
      email: this.email.value,
      password: this.password.value,
    });
  }
}
