import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-update',
  template: `
    <input [(ngModel)]="email" />
    <button (click)="reset()">Reset</button>
  `,
  imports: [FormsModule],
})
export class TemplateUpdateComponent {
  email = '';

  reset() {
    this.email = '';
  }
}
