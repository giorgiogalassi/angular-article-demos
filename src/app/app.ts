import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Forms — Advanced Patterns (Part 4)');

  protected readonly sections = [
    {
      label: 'Baseline',
      links: [
        { path: '/baseline/template-driven', label: 'Template-driven' },
        { path: '/baseline/reactive', label: 'Reactive' },
        { path: '/baseline/signal-forms', label: 'Signal Forms' },
      ],
    },
    {
      label: 'Dynamic Forms',
      links: [
        { path: '/dynamic-forms/template-driven', label: 'Template-driven' },
        { path: '/dynamic-forms/reactive', label: 'Reactive' },
        { path: '/dynamic-forms/signal-forms', label: 'Signal Forms' },
      ],
    },
    {
      label: 'Async Validation',
      links: [
        { path: '/async-validation/template-driven', label: 'Template-driven' },
        { path: '/async-validation/reactive', label: 'Reactive' },
        { path: '/async-validation/signal-forms', label: 'Signal Forms' },
      ],
    },
    {
      label: 'Custom Controls',
      links: [
        { path: '/custom-controls/cva', label: 'CVA + Validator' },
        { path: '/custom-controls/signal-forms', label: 'FormValueControl' },
      ],
    },
  ];
}
