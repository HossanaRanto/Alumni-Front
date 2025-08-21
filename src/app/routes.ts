import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { USER_ROUTES } from './user/user.routes';
import { ADMIN_ROUTES } from './admin/admin.routes';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  // TODO: Convert user and admin modules to standalone and update these routes
  { path: '', loadComponent: () => import('./user/features/simple/main/main.component').then(m => m.MainComponent), canMatch: [], children: [
    ...USER_ROUTES
  ] },
  { path: 'admin', loadComponent: () => import('./admin/features/dashboard/dashboard.component').then(m => m.DashboardComponent), canMatch: [AdminGuard], children: [
    ...ADMIN_ROUTES
  ] },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundComponent }
];
