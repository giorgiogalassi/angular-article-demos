import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RatingInputCva } from '../rating-input-cva/rating-input-cva';

@Component({
  selector: 'app-registration-cva',
  imports: [ReactiveFormsModule, RatingInputCva],
  templateUrl: './registration-cva.html',
  styleUrl: './registration-cva.css',
})
export class RegistrationCva {
  // No external Validators.min(1) needed — RatingInputCva validates itself.
  form = new FormGroup({
    rating: new FormControl(0, { nonNullable: true }),
  });
}
