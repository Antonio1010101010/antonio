import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about.component').then(m => m.AboutComponent)
  },
  { path: '**', redirectTo: '' }
];
