import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-flow',
  template: `
    <input [formControl]="control" />
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveFlowComponent {
  control = new FormControl('');

  constructor() {
    this.control.valueChanges.subscribe((v) => console.log(v));
    this.control.setValue('hello'); // emitted immediately
  }
}
