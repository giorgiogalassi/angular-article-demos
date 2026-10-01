import { Routes } from '@angular/router';

export const STATE_SIGNAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./state-signal.component').then((m) => m.StateSignalComponent),
  },
];
