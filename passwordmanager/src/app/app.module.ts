import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent }  from './app.component';

import { LoginComponent } from './components/login/login.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegisterComponent } from './components/register/register.component'

const appRoutes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent}
]

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule ],
  declarations: [ AppComponent, LoginComponent, NavbarComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
