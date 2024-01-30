import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page-1/page-1.component";
import {Page2Component} from "./page-2/page-2.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'page-1', component: Page1Component},
  {path: 'page-2', component: Page2Component},
];
