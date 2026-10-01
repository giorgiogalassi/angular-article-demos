import { Component, inject } from '@angular/core';
import { MyAwesomeService } from './providers/my-awesome.service';
import { MyAwesomeComponent } from './my-awesome.component';

@Component({
  selector: 'app-my-awesome-parent',
  standalone: true,
  imports: [MyAwesomeComponent],
  template: `<fieldset>
    <legend>MyAwesomeParentComponent</legend>
    {{ _myAwesomeService.prefix }}
    <app-my-awesome></app-my-awesome>
  </fieldset> `,
  styles: [
    `
      fieldset {
        border: 2px solid red;
      }
    `,
  ],
  providers: [
    /*  {
      provide: MyAwesomeService,
      useValue: {
        prefix: 'my-awesome-parent-component',
      },
    }, */
  ],
})
export class MyAwesomeParentComponent {
  public _myAwesomeService = inject(MyAwesomeService);
}
