import { Routes } from '@angular/router';

export const EMAIL_TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./email-template.component').then((m) => m.EmailTemplateComponent),
  },
];
