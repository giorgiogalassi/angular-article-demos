import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-registration-signal',
  imports: [FormField, JsonPipe],
  templateUrl: './registration-signal.html',
  styleUrl: './registration-signal.css',
})
export class RegistrationSignal {
  model = signal({ username: '', email: '', password: '' });

  f = form(this.model, (path) => {
    required(path.username);
    required(path.email);
    email(path.email);
    required(path.password);
    minLength(path.password, 8);
  });

  submit(): void {
    console.log('[signal forms] submit', this.model());
  }
}
