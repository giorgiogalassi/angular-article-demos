import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-list-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './phone-list-reactive.html',
  styleUrl: './phone-list-reactive.css',
})
export class PhoneListReactive {
  form = new FormGroup({
    phones: new FormArray([
      new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ]),
  });

  get phones(): FormArray {
    return this.form.controls.phones;
  }

  add(): void {
    this.phones.push(
      new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    );
  }

  remove(index: number): void {
    this.phones.removeAt(index);
  }
}
