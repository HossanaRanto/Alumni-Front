import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  // TODO: Convert user and admin modules to standalone and update these routes
  { path: '', loadChildren: () => import('./user/user.routes').then(m => m.USER_ROUTES), canMatch: [] },
  { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES), canMatch: [AdminGuard] },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundComponent }
];
