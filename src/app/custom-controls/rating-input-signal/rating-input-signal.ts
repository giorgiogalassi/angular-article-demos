import { Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-rating-input-signal',
  imports: [],
  templateUrl: './rating-input-signal.html',
  styleUrl: './rating-input-signal.css',
})
export class RatingInputSignal implements FormValueControl<number> {
  stars = [1, 2, 3, 4, 5];

  // Required by FormValueControl - FormField keeps this in sync with the field tree.
  value = model<number>(0);

  // Optional - FormField binds these automatically when declared.
  disabled = input<boolean>(false);
  touched = model<boolean>(false);

  select(star: number): void {
    this.value.set(star);
    this.touched.set(true);
  }
}
