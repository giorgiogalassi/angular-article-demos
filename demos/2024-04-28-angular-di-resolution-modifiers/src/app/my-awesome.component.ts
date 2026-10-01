import { Component, inject } from '@angular/core';
import { MyAwesomeService } from './providers/my-awesome.service';
import { MyAwesomeChildComponent } from './my-awesome-child.component';

@Component({
  selector: 'app-my-awesome',
  standalone: true,
  imports: [MyAwesomeChildComponent],
  template: `<fieldset>
    <legend>MyAwesomeComponent</legend>
    {{ _myAwesomeService.prefix }}
    <app-my-awesome-child></app-my-awesome-child>
  </fieldset> `,
  styles: [
    `
      fieldset {
        border: 2px solid blue;
      }
    `,
  ],
  providers: [],
})
export class MyAwesomeComponent {
  public _myAwesomeService = inject(MyAwesomeService);
}
