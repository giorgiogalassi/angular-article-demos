import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of, switchMap, timer } from 'rxjs';
import { UserService } from './user.service';

export function uniqueUsernameValidator(userService: UserService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);

    return timer(400).pipe(
      switchMap(() => userService.checkUsername(control.value)),
      map((isTaken) => (isTaken ? { usernameTaken: true } : null)),
      catchError(() => of(null)),
    );
  };
}
