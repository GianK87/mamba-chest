import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {authGuard} from "./auth.guard";

export const routes: Routes = [
    { path: 'standings',
      // canActivate: [authGuard],
      loadComponent:()=> import('./components/standings/standings.component').then((com)=> com.StandingsComponent) },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
];
