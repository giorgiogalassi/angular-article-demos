import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-state-signal',
  standalone: true,
  imports: [FormField],
  template: `
    <h3>Signal Forms: Form State Pattern</h3>
    <p>UI conditions are driven by signal-based state like <code>touched()</code>, <code>invalid()</code>, and submit state.</p>
    <form (ngSubmit)="submitted.set(true)">
      <input [formField]="f.email" />

      @if ((f.email().touched() || submitted()) && f.email().invalid()) {
        <p>Invalid email.</p>
      }

      <button type="submit" [disabled]="f.email().invalid()">Submit</button>
    </form>
  `,
})
export class StateSignalComponent {
  model = signal({ email: '' });
  submitted = signal(false);

  f = form(this.model, (path) => {
    required(path.email);
    email(path.email);
  });
}
