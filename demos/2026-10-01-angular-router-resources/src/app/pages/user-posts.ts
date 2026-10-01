import { Component, input } from '@angular/core';
import { Post } from '../demo-api';

@Component({
  selector: 'app-user-posts',
  template: `
    <h3>Posts <small>(child route resource, loaded in parallel with the parent)</small></h3>
    <ul>
      @for (post of posts(); track post.id) {
        <li>{{ post.title }}</li>
      }
    </ul>
  `,
})
export class UserPosts {
  readonly posts = input.required<Post[]>();
}
