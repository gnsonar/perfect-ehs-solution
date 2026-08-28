import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Perfect EHS Solutions | Fire Safety & HSE Training',
  },
  { path: '**', redirectTo: '' },
];
