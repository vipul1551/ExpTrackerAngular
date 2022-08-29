import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    UserlayoutComponent,
    HomeComponent,
    LogoutComponent,
    AddcategoryComponent,
    AdminheaderComponent,
    AdminlayoutComponent,
    DashboardComponent,
    ListcategoryComponent,
    EditcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    HttpClientModule,
    DialogModule,
    TableModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
