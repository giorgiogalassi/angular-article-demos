import { Component } from '@angular/core';
import CounterComponent from '../../components/counter/counter.component';

@Component({
  selector: 'app-hydrate',
  imports: [CounterComponent],
  template: `
    <section note>
      <p>
        To test the <strong><span>EventReplay</span></strong> is suggested to set a
        network throttling to, at least, 4g. While the page is loading click the
        add/remove button. Once the page is fully loaded all the events will be
        replayed and the count signal will have the corret value.
      </p>
    </section>

    <section body>
      @defer (hydrate on interaction) {
        <app-counter />
      }
    </section>
  `,
  styles: `
    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      gap: 8px;

      margin-top: 16px;

      &[note] {
        margin: 16px;
        padding: 8px;
        border: 4px double var(--main-color);
      }
    }

    p {
      margin: 0;
    }
  `,
})
export default class HydrateComponent {}
