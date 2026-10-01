import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Template-driven: Baseline Login</h3>
    <p>This snippet binds inputs with <code>ngModel</code> and submits the model object as-is.</p>
    <form #f="ngForm" (ngSubmit)="submit()">
      <label>
        Email
        <input name="email" [(ngModel)]="model.email" />
      </label>
      <label>
        Password
        <input name="password" type="password" [(ngModel)]="model.password" />
      </label>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginTemplateComponent {
  model = { email: '', password: '' };

  submit(): void {
    console.log('submit', this.model);
  }
}
