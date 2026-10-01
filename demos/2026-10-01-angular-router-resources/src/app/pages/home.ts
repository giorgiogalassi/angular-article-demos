import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Router Resources vs Resolvers</h1>
    <p>
      Both routes load the same data: a <code>user</code> on the parent route (800ms) and its <code>posts</code> on a
      child route (800ms). Watch the timeline on the right.
    </p>
    <ul>
      <li>
        <a routerLink="/resources/users/1/posts">Router Resources</a>: parent and child start together, so the page is
        ready after ~800ms. The <code>activity</code> feed is <code>nonBlocking()</code>, so it keeps loading after the
        page appears.
      </li>
      <li>
        <a routerLink="/resolvers/users/1/posts">Resolvers</a>: the child resolver waits for the parent, so the page is
        ready after ~1600ms.
      </li>
    </ul>
    <p>Use the checkboxes at the top to make the blocking or the non-blocking request fail.</p>
  `,
})
export class Home {}
