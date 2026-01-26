import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { ChoiceInputsDemoComponent } from './app/components/choice-input-demo';
import { DateInputDemoComponent } from './app/components/date-input';
import { DateComponent } from './app/components/date';
import { NumberInputsDemoComponent } from './app/components/number-input-demo';
import { NumberInputComponent } from './app/components/number-input';
import { RadioComponent } from './app/components/radio';
import { ReactiveFlowDemoComponent } from './app/components/reactive-flow-demo';
import { ReactiveFlowComponent } from './app/components/reactive-flow';
import { ReactiveProgrammaticComponent } from './app/components/reactive-programmatic';
import { ReactiveUpdateComponent } from './app/components/reactive-update';
import { SelectDemoComponent } from './app/components/select-demo';
import { SelectComponent } from './app/components/select';
import { SignalFlowDemoComponent } from './app/components/signal-flow-demo';
import { SignalFlowComponent } from './app/components/signal-flow';
import { TemplateDrivenProgrammaticComponent } from './app/components/template-driven-programmatic';
import { TemplateUpdateComponent } from './app/components/template-update';

@Component({
  selector: 'app-root',
  imports: [
    ChoiceInputsDemoComponent,
    DateInputDemoComponent,
    DateComponent,
    NumberInputsDemoComponent,
    NumberInputComponent,
    RadioComponent,
    ReactiveFlowDemoComponent,
    ReactiveFlowComponent,
    ReactiveProgrammaticComponent,
    ReactiveUpdateComponent,
    SelectDemoComponent,
    SelectComponent,
    SignalFlowDemoComponent,
    SignalFlowComponent,
    TemplateDrivenProgrammaticComponent,
    TemplateUpdateComponent,
  ],
  template: `
    <main class="demo">

      <header class="demo__header">
        <h1>Angular Forms – Part 2 Demos</h1>
        <p>Data Flow and Working with Inputs</p>
      </header>

      <!-- Tabs -->
      <nav class="demo__tabs">
        <button (click)="tab.set('inputs')" [class.active]="tab() === 'inputs'">
          Inputs
        </button>

        <button (click)="tab.set('flow')" [class.active]="tab() === 'flow'">
          Data Flow
        </button>

        <button (click)="tab.set('programmatic')" [class.active]="tab() === 'programmatic'">
          Programmatic Updates
        </button>
      </nav>

      <!-- Inputs -->
      @if (tab() === 'inputs') {
        <section class="demo__section">
          <h2>Handling Different Input Types</h2>

          <h3>Text and number inputs</h3>
          <app-number-inputs-demo />
          <app-number-input />

          <h3>Checkboxes and radio buttons</h3>
          <app-choice-inputs-demo />
          <app-radio />

          <h3>Date inputs</h3>
          <app-date-input-demo />
          <app-date />

          <h3>Select elements</h3>
          <app-select-demo />
          <app-select />
        </section>
      }

      <!-- Data Flow -->
      @if (tab() === 'flow') {
        <section class="demo__section">
          <h2>Data Flow</h2>

          <h3>Reactive Forms – synchronous flow</h3>
          <app-reactive-flow-demo />
          <app-reactive-flow />

          <h3>Signal Forms – reactive synchronization</h3>
          <app-signal-flow-demo />
          <app-signal-flow />

          <h3>Template-driven Forms – asynchronous flow</h3>
          <p>
            This behavior is explained conceptually in the article.
            It mostly surfaces in timing and testing scenarios.
          </p>
        </section>
      }

      <!-- Programmatic -->
      @if (tab() === 'programmatic') {
        <section class="demo__section">
          <h2>Reading and Updating Values Programmatically</h2>

          <h3>Template-driven Forms</h3>
          <app-template-driven-programmatic />
          <app-template-update />

          <h3>Reactive Forms</h3>
          <app-reactive-programmatic />
          <app-reactive-update />
        </section>
      }
    </main>
  `,
  styles: `
      /* Layout */
    .demo {
      max-width: 960px;
      margin: 0 auto;
      padding: 24px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
        Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .demo__header {
      margin-bottom: 24px;
    }

    .demo__header h1 {
      margin: 0 0 4px;
    }

    .demo__header p {
      margin: 0;
      color: #666;
    }

    /* Tabs */
    .demo__tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
      border-bottom: 1px solid #ddd;
    }

    .demo__tabs button {
      appearance: none;
      background: none;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 14px;
      color: #555;
      border-bottom: 2px solid transparent;
    }

    .demo__tabs button:hover {
      color: #000;
    }

    .demo__tabs button.active {
      color: #000;
      border-bottom-color: #3f51b5; /* Angular-ish blue */
      font-weight: 500;
    }

    /* Sections */
    .demo__section {
      padding-top: 8px;
    }

    .demo__section h2 {
      margin-top: 0;
    }

    .demo__section h3 {
      margin-top: 24px;
    }

    /* Small helpers */
    .demo__section p {
      max-width: 720px;
    }

    .demo__section pre {
      background: #111;
      color: #eee;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
    }
  `,
})
export class App {
  tab = signal<'inputs' | 'flow' | 'programmatic'>('inputs');
}

bootstrapApplication(App);
