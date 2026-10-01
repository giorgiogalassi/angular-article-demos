import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-email-signal',
  standalone: true,
  imports: [FormField],
  template: `
    <h3>Signal Forms: Built-in Validators</h3>
    <p>Validators are attached to the signal form path and error state is read through signal getters.</p>
    <input [formField]="f.email" />
    @if (f.email().invalid() && f.email().touched()) {
      <p>
        @for (error of f.email().errors(); track error.kind) {
          <span>{{ error.message }}</span>
        }
      </p>
    }
  `,
})
export class EmailSignalComponent {
  model = signal({ email: '' });

  f = form(this.model, (path) => {
    required(path.email);
    email(path.email);
  });
}
