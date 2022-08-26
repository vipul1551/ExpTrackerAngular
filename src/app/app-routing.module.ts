import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AuthtokenGuard } from './authtoken.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';

const routes: Routes = [
  {component : LoginComponent,path: ""},
  {component : SignupComponent,path : "signup"},
  {component : LoginComponent,path : "login"},
  {component : LogoutComponent,path : "logout"},

  {component : UserlayoutComponent,path : "user",children: [
    {component : HomeComponent,path : "home"}
  ], canActivate : [AuthtokenGuard]
  },
  {component : AdminlayoutComponent,path : "admin",children: [
    {component : DashboardComponent,path : "dashboard"},
    {component : AddcategoryComponent,path : "addcategory"},
    {component : ListcategoryComponent,path : "listcategory"},
  ], canActivate : [AuthtokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
