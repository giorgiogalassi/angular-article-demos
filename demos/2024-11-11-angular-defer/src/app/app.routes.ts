import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'), // TODO: Create about page
  },
  {
    path: 'hydrate',
    loadComponent: () => import('./pages/hydrate/hydrate.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
