import { Component, inject } from '@angular/core';
import { MyAwesomeService } from './providers/my-awesome.service';
import { MyAwesomeParentComponent } from './my-awesome-parent.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Resolution Modifiers examples</h1>

    <fieldset>
      <legend>AppComponent</legend>
      {{ _myAwesomeService.prefix }}
      <app-my-awesome-parent></app-my-awesome-parent>
    </fieldset>`,
  styles: [
    `
      fieldset {
        border: 2px solid orange;
      }
    `,
  ],
  imports: [MyAwesomeParentComponent],
  providers: []
})
export class AppComponent {
  public _myAwesomeService = inject(MyAwesomeService);
}
