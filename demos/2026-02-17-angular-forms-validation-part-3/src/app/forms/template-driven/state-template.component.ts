import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state-template',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Template-driven: Form State Pattern</h3>
    <p>
      Error feedback appears after field interaction or submit attempt, using a local <code>submitted</code> flag plus
      template state.
    </p>
    <form #f="ngForm" (ngSubmit)="submitted = true">
      <input name="email" [(ngModel)]="email" required email #m="ngModel" />

      @if ((m.touched || submitted) && m.invalid) {
        <p>Invalid email.</p>
      }

      <button type="submit" [disabled]="f.invalid">Submit</button>
    </form>
  `,
})
export class StateTemplateComponent {
  email = '';
  submitted = false;
}
