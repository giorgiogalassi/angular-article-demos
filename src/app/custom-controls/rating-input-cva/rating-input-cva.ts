import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-rating-input-cva',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputCva),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RatingInputCva),
      multi: true,
    },
  ],
  templateUrl: './rating-input-cva.html',
  styleUrl: './rating-input-cva.css',
})
export class RatingInputCva implements ControlValueAccessor, Validator {
  stars = [1, 2, 3, 4, 5];
  currentValue = 0;
  isDisabled = false;

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};
  private onValidationChange: () => void = () => {};

  // ControlValueAccessor
  writeValue(value: number): void {
    this.currentValue = value ?? 0;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Validator
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value >= 1 ? null : { ratingRequired: true };
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidationChange = fn;
  }

  // User interaction
  select(star: number): void {
    this.currentValue = star;
    this.onChange(star);
    this.onTouched();
    this.onValidationChange();
  }
}
