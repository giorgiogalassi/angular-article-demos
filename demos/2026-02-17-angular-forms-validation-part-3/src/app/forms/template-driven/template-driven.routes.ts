import { Routes } from '@angular/router';

export const TEMPLATE_DRIVEN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./template-driven-forms-hub.component').then((m) => m.TemplateDrivenFormsHubComponent),
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login-template.routes').then((m) => m.LOGIN_TEMPLATE_ROUTES),
      },
      {
        path: 'email',
        loadChildren: () => import('./email-template.routes').then((m) => m.EMAIL_TEMPLATE_ROUTES),
      },
      {
        path: 'state',
        loadChildren: () => import('./state-template.routes').then((m) => m.STATE_TEMPLATE_ROUTES),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
