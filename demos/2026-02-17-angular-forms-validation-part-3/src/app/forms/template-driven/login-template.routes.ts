import { Routes } from '@angular/router';

export const LOGIN_TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./login-template.component').then((m) => m.LoginTemplateComponent),
  },
];
