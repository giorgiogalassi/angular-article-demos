import { Routes } from '@angular/router';

export const REACTIVE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./reactive-forms-hub.component').then((m) => m.ReactiveFormsHubComponent),
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login-reactive.routes').then((m) => m.LOGIN_REACTIVE_ROUTES),
      },
      {
        path: 'email',
        loadChildren: () => import('./email-reactive.routes').then((m) => m.EMAIL_REACTIVE_ROUTES),
      },
      {
        path: 'state',
        loadChildren: () => import('./state-reactive.routes').then((m) => m.STATE_REACTIVE_ROUTES),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
