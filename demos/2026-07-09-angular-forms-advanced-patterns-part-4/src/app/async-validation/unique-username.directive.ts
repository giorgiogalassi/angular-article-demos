import { Directive, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of, switchMap, timer } from 'rxjs';
import { UserService } from './user.service';

@Directive({
  selector: '[uniqueUsername]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameDirective, multi: true },
  ],
})
export class UniqueUsernameDirective implements AsyncValidator {
  private userService = inject(UserService);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.value) return of(null);

    return timer(400).pipe(
      switchMap(() => this.userService.checkUsername(control.value)),
      map((isTaken) => (isTaken ? { usernameTaken: true } : null)),
      catchError(() => of(null)),
    );
  }
}
