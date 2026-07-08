import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { debounce, form, FormField, required, validateAsync } from '@angular/forms/signals';
import { UserService } from '../user.service';

@Component({
  selector: 'app-async-registration-signal',
  imports: [FormField],
  templateUrl: './registration-signal.html',
  styleUrl: './registration-signal.css',
})
export class RegistrationSignal {
  private userService = inject(UserService);

  model = signal({ username: '' });

  f = form(this.model, (path) => {
    required(path.username);

    debounce(path.username, 400);

    // Wraps the shared UserService in an rxResource so it can plug into
    // validateAsync(), keeping the same username-check call used by the
    // reactive validator and the template-driven directive.
    validateAsync(path.username, {
      params: (ctx) => ctx.value() || undefined,
      factory: (params) =>
        rxResource({
          params,
          stream: ({ params }) => this.userService.checkUsername(params),
        }),
      onSuccess: (isTaken) =>
        isTaken ? { kind: 'usernameTaken', message: 'Username is already taken.' } : undefined,
      // Swallow request failures, mirroring the catchError(() => of(null))
      // fallback in unique-username.validator.ts / .directive.ts.
      onError: () => undefined,
    });
  });
}
