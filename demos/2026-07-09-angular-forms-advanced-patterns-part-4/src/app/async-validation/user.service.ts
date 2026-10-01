import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

/**
 * Mock user service standing in for a real backend call. Any username
 * containing "taken" is reported as already registered, so you can trigger
 * the "already taken" branch in the demos without wiring up a server.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  checkUsername(username: string): Observable<boolean> {
    const isTaken = username.toLowerCase().includes('taken');
    return of(isTaken).pipe(delay(600));
  }
}
