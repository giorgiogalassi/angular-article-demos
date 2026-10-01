import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../demo-api';

@Component({
  selector: 'app-resolver-profile',
  imports: [RouterOutlet],
  template: `
    <h2>{{ user().name }}</h2>
    <p class="hint">Loaded by a classic resolver. Refreshing it means navigating again.</p>
    <router-outlet />
  `,
})
export class ResolverProfile {
  readonly user = input.required<User>();
}
