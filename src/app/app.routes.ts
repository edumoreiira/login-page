import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register-page/register.component';
import { LoginComponent } from './pages/login-page/login.component';
import { UsersControlPageComponent } from './pages/users-control-page/users-control-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: UsersControlPageComponent }
];
