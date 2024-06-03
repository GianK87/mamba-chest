import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {StandingsComponent} from "./components/standings/standings.component";

export const routes: Routes = [
    {
        path: 'standings',
        // canActivate: [authGuard],
        component: StandingsComponent
    },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: StandingsComponent},
];
