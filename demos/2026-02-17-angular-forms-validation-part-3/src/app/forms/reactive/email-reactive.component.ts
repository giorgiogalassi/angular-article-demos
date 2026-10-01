import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h3>Reactive: Built-in Validators</h3>
    <p>Validators are attached in the model; the template only reads control state.</p>
    <input [formControl]="email" />
    @if (email.invalid && email.touched) {
      <p>
        @if (email.hasError('required')) { <span>Email is required.</span> }
        @if (email.hasError('email')) { <span>Invalid email format.</span> }
      </p>
    }
  `,
})
export class EmailReactiveComponent {
  email = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });
}
