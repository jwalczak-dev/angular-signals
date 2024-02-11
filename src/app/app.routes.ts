import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'page-1',
    loadComponent: () => import('./page-1/page-1.component').then(c => c.Page1Component)
  },
  {
    path: 'page-2',
    loadComponent: () => import('./page-2/page-2.component').then(c => c.Page2Component)
  },
  {
    path: 'page-3',
    loadComponent: () => import('./page-3/page-3.component').then(c => c.Page3Component)
  },
];
