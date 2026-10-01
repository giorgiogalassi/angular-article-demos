import { Routes } from '@angular/router';

export const SIGNAL_FORMS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./signal-forms-hub.component').then((m) => m.SignalFormsHubComponent),
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login-signal.routes').then((m) => m.LOGIN_SIGNAL_ROUTES),
      },
      {
        path: 'email',
        loadChildren: () => import('./email-signal.routes').then((m) => m.EMAIL_SIGNAL_ROUTES),
      },
      {
        path: 'state',
        loadChildren: () => import('./state-signal.routes').then((m) => m.STATE_SIGNAL_ROUTES),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
