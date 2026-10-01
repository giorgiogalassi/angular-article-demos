import { Routes } from '@angular/router';

export const STATE_REACTIVE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./state-reactive.component').then((m) => m.StateReactiveComponent),
  },
];
