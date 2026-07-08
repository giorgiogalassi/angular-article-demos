import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce, form, FormField, required, validateHttp } from '@angular/forms/signals';

interface UsernameCheckResult {
  taken: boolean;
}

@Component({
  selector: 'app-async-registration-signal',
  imports: [FormField],
  templateUrl: './registration-signal.html',
  styleUrl: './registration-signal.css',
})
export class RegistrationSignal {
  private http = inject(HttpClient);

  model = signal({ username: '' });

  f = form(this.model, (path) => {
    required(path.username);

    debounce(path.username, 400);

    validateHttp(path.username, {
      request: (ctx) =>
        ctx.value() ? `/api/check-username?q=${ctx.value()}` : undefined,
      onSuccess: (result: UsernameCheckResult) =>
        result.taken ? { kind: 'usernameTaken', message: 'Username is already taken.' } : undefined,
      onError: () => ({ kind: 'usernameCheckFailed', message: 'Could not verify username availability.' }),
    });
  });
}
