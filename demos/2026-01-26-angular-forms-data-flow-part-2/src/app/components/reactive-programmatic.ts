import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-programmatic',
  imports: [ReactiveFormsModule],
  template: `
    <input [formControl]="emailCtrl" placeholder="Email" />
    <button type="button" (click)="prefill()">Prefill</button>
    <p>emailCtrl.value: {{ emailCtrl.value }}</p>
  `
})
export class ReactiveProgrammaticComponent {
  emailCtrl = new FormControl('', { nonNullable: true });

  constructor() {
    this.emailCtrl.valueChanges.subscribe(v => console.log('valueChanges:', v));
  }

  prefill(): void {
    this.emailCtrl.setValue('hello@angular.dev');
  }
}