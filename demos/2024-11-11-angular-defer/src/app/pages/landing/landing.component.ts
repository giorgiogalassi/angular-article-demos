import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  template: `
    <section class="title">
      <h1><span>&#64;defer</span> demo!</h1>
      <br />
      <a routerLink="/hydrate">Hydrate</a>
    </section>
  `,
  styles: `
    .title {
      text-align: center;

      margin-top: 32px;

      & h1 {
        font-size: 3.125rem;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
      }

      & span {
        color: #dd0031;
        font-family: "Roboto Mono", monospace;
      }
    }
  `,
})
export default class LandingComponent {}
