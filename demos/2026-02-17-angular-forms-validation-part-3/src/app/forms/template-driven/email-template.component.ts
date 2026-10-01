import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-template',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Template-driven: Built-in Validators</h3>
    <p>
      Validators are declared in markup with <code>required</code> and <code>email</code>. State is read from the
      <code>ngModel</code> reference.
    </p>
    <form #f="ngForm">
      <input name="email" [(ngModel)]="email" required email #emailModel="ngModel" />
      @if (emailModel.invalid && emailModel.touched) {
        <p>
          @if (emailModel.errors?.['required']) { <span>Email is required.</span> }
          @if (emailModel.errors?.['email']) { <span>Invalid email format.</span> }
        </p>
      }
      <button type="button" [disabled]="f.invalid">Continue</button>
    </form>
  `,
})
export class EmailTemplateComponent {
  email = '';
}
