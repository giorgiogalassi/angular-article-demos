import { Component, input, model, output } from '@angular/core';
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

  // Optional - FormField binds this automatically when declared.
  disabled = input<boolean>(false);

  // Optional - FormField listens to this output (not a `touched` model/input) to mark the
  // field as touched. A `touched` model does not propagate back to the field: only the
  // dedicated `touch` output does. Mirrors RatingInputCva's onTouched() call in select().
  touch = output<void>();

  select(star: number): void {
    this.value.set(star);
    this.touch.emit();
  }
}
