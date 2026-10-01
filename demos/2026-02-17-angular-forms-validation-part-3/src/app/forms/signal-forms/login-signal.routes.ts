import { Routes } from '@angular/router';

export const LOGIN_SIGNAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./login-signal.component').then((m) => m.LoginSignalComponent),
  },
];
