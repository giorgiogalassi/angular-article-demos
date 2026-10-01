import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-driven-forms-hub',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h2>Template-driven Forms</h2>
    <p>
      In this approach, most validation and state wiring is declared directly in the template using directives like
      <code>ngModel</code>, <code>required</code>, and template references.
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
export class TemplateDrivenFormsHubComponent {}
