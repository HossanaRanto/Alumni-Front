import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/features/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[LoginGuard]},
  {path:"register",component:RegisterComponent,canActivate:[LoginGuard]},
  {path:"",loadChildren:()=>import("./user/user.module").then(u=>u.UserModule),canMatch:[]},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(a=>a.AdminModule),canMatch:[AdminGuard]},
  // {path:"user",loadChildren:()=>import("./user/user.module").then(u=>u.UserModule)},
  {path:"test",component:TestComponent},
  {path:"**",component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
