import { Component, input } from '@angular/core';
import { Post } from '../demo-api';

@Component({
  selector: 'app-resolver-posts',
  template: `
    <h3>Posts <small>(child resolver, started only after the parent finished)</small></h3>
    <ul>
      @for (post of posts(); track post.id) {
        <li>{{ post.title }}</li>
      }
    </ul>
  `,
})
export class ResolverPosts {
  readonly posts = input.required<Post[]>();
}
