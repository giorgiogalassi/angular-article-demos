import { Component, signal } from '@angular/core';
import { form, FormField, min } from '@angular/forms/signals';
import { RatingInputSignal } from '../rating-input-signal/rating-input-signal';

@Component({
  selector: 'app-registration-signal-rating',
  imports: [FormField, RatingInputSignal],
  templateUrl: './registration-signal.html',
  styleUrl: './registration-signal.css',
})
export class RegistrationSignal {
  model = signal({ rating: 0 });

  f = form(this.model, (path) => {
    min(path.rating, 1); // validation stays in the schema, not in the control
  });
}
