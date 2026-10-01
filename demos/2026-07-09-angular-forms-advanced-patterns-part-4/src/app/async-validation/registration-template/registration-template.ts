import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniqueUsernameDirective } from '../unique-username.directive';

@Component({
  selector: 'app-async-registration-template',
  imports: [FormsModule, UniqueUsernameDirective],
  templateUrl: './registration-template.html',
  styleUrl: './registration-template.css',
})
export class RegistrationTemplate {
  username = '';
}
