import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-programmatic',
  imports: [FormsModule],
  template: `
    <input name="email" [(ngModel)]="email" placeholder="Email" />
    <button type="button" (click)="prefill()">Prefill</button>
    <p>email: {{ email }}</p>
  `,
})
export class TemplateDrivenProgrammaticComponent {
  email = '';

  prefill(): void {
    this.email = 'hello@angular.dev';
  }
}
