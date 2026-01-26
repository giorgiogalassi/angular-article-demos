import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-update',
  template: `
    <input [formControl]="control" />
    <button (click)="reset()">Reset</button>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveUpdateComponent {
  control = new FormControl('');

  reset() {
    this.control.setValue('');
  }
}
