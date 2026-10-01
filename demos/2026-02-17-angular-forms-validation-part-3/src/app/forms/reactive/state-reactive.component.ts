import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-state-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h3>Reactive: Form State Pattern</h3>
    <p>Control visibility of errors using control state (<code>touched</code>) and submit state.</p>
    <form (ngSubmit)="submitted = true">
      <input [formControl]="email" />

      @if ((email.touched || submitted) && email.invalid) {
        <p>Invalid email.</p>
      }

      <button type="submit" [disabled]="email.invalid">Submit</button>
    </form>
  `,
})
export class StateReactiveComponent {
  email = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });

  submitted = false;
}
