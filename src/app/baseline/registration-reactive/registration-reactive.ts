import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-registration-reactive',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './registration-reactive.html',
  styleUrl: './registration-reactive.css',
})
export class RegistrationReactive {
  form = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  submit(): void {
    console.log('[reactive] submit', this.form.value);
  }
}
