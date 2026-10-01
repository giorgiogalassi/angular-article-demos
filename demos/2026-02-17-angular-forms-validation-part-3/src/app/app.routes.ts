import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.routes').then((m) => m.FORMS_ROUTES),
  },
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
];
