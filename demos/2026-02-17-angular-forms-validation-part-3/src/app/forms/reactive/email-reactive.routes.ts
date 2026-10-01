import { Routes } from '@angular/router';

export const EMAIL_REACTIVE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./email-reactive.component').then((m) => m.EmailReactiveComponent),
  },
];
