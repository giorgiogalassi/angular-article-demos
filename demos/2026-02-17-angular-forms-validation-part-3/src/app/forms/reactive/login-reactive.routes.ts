import { Routes } from '@angular/router';

export const LOGIN_REACTIVE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./login-reactive.component').then((m) => m.LoginReactiveComponent),
  },
];
