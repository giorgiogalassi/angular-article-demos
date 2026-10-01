import { Component, inject } from '@angular/core';
import { MyAwesomeService } from './providers/my-awesome.service';

@Component({
  selector: 'app-my-awesome-child',
  standalone: true,
  imports: [],
  template: `<fieldset>
    <legend>MyAwesomeChildComponent</legend>
    {{ _myAwesomeService.prefix }}
  </fieldset> `,
  styles: [
    `
      fieldset {
        border: 2px solid violet;
      }
    `,
  ],
  providers: [
    {
      provide: MyAwesomeService,
      useValue: {
        prefix: 'my-awesome-child-component',
      },
    },
  ],
})
export class MyAwesomeChildComponent {
  public _myAwesomeService = inject(MyAwesomeService);
}
