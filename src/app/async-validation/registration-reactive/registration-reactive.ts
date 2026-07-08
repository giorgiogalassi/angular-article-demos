import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { uniqueUsernameValidator } from '../unique-username.validator';

@Component({
  selector: 'app-async-registration-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-reactive.html',
  styleUrl: './registration-reactive.css',
})
export class RegistrationReactive {
  private userService = inject(UserService);

  username = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
    asyncValidators: [uniqueUsernameValidator(this.userService)],
    updateOn: 'blur',
  });
}
