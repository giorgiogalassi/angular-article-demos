import { Routes } from '@angular/router';

export const EMAIL_SIGNAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./email-signal.component').then((m) => m.EmailSignalComponent),
  },
];
