import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';

export const routes: Routes = [
    {
     path: 'login',
     component: LoginComponent   
    },
    {
        path: 'register',
        component: ResgisterComponent
    }
];
