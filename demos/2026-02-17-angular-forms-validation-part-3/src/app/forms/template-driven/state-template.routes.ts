import { Routes } from '@angular/router';

export const STATE_TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./state-template.component').then((m) => m.StateTemplateComponent),
  },
];
