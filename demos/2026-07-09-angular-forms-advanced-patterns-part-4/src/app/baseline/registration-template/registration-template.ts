import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-registration-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './registration-template.html',
  styleUrl: './registration-template.css',
})
export class RegistrationTemplate {
  model = { username: '', email: '', password: '' };

  submit(form: NgForm): void {
    console.log('[template-driven] submit', form.value);
  }
}
