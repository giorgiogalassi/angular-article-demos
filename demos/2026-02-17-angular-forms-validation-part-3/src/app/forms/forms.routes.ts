import { Routes } from '@angular/router';

export const FORMS_ROUTES: Routes = [
  {
    path: 'template-driven',
    loadChildren: () =>
      import('./template-driven/template-driven.routes').then((m) => m.TEMPLATE_DRIVEN_ROUTES),
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.routes').then((m) => m.REACTIVE_ROUTES),
  },
  {
    path: 'signal-forms',
    loadChildren: () => import('./signal-forms/signal-forms.routes').then((m) => m.SIGNAL_FORMS_ROUTES),
  },
  { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
];
