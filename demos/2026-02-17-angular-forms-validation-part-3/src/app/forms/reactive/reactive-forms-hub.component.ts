import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactive-forms-hub',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h2>Reactive Forms</h2>
    <p>
      In this approach, control state and validators are centralized in TypeScript with <code>FormControl</code> and
      <code>Validators</code>.
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
export class ReactiveFormsHubComponent {}
