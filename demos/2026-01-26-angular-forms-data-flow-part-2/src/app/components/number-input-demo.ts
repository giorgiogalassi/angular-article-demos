import { Component, computed, effect, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-number-inputs-demo',
  imports: [ReactiveFormsModule, FormField],
  template: `
    <h4>Reactive</h4>
    <input type="number" [formControl]="ageCtrl" />
    <p>ageCtrl.value: {{ ageCtrl.value }} ({{ typeofAgeCtrl }})</p>

    <h4>Signals (experimental)</h4>
    <input type="number" [formField]="ageForm.age" />
    <p>ageForm.age().value(): {{ ageForm.age().value() }} ({{ typeofAgeSignal }})</p>
  `,
})
export class NumberInputsDemoComponent {
  // Reactive
  ageCtrl = new FormControl<number | null>(null);
  typeofAgeCtrl = 'unknown';

  // Signals
  model = signal({ age: 0 });
  ageForm = form(this.model);
  typeofAgeSignal = 'unknown';

  constructor() {
    // Just to make the type difference visible in the UI.
    this.ageCtrl.valueChanges.subscribe((v) => (this.typeofAgeCtrl = typeof v));
    effect(() => {
      this.typeofAgeSignal = typeof this.ageForm.age().value();
    });
  }
}
