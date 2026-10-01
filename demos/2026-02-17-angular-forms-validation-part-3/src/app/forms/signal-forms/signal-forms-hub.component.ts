import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signal-forms-hub',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h2>Signal Forms</h2>
    <p>
      This approach uses signal-based form state where values, validity, and interaction state are read via reactive
      signal APIs.
    </p>
    <nav>
      <a routerLink="login" routerLinkActive="active">Baseline Login</a>
      <a routerLink="email" routerLinkActive="active">Built-in Validators</a>
      <a routerLink="state" routerLinkActive="active">State Pattern</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }
    .active {
      font-weight: 700;
      text-decoration: underline;
    }
  `],
})
export class SignalFormsHubComponent {}
