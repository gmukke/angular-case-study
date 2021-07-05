import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "LoginComponent",
},
// {
//   path: "admin",
//   loadChildren: () =>
//     import("./admin/admin.module").then((m) => m.AdminModule),
//   canActivate: [AuthGuardService]
// },
{
  path: "home",
  component: HomeComponent,
  canActivate: [AuthGuardService]
},
{
  path: "employees",
  component: EmployeesComponent,
  canActivate: [AuthGuardService]
},
{
  path: "login",
  component: LoginComponent,
},
{
  path: "**",
  component: LoginComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
