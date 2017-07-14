import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';

import { LoginComponent } from './components/login/login.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegisterComponent } from './components/register/register.component'
import { HomeComponent } from './components/home/home.component'
import { SidebarComponent} from './components/sidebar/sidebar.component'

import { SideBarText } from './components/sidebar/sidebartext'

const appRoutes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'**', component:HomeComponent},
]

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule, BrowserAnimationsModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, NavbarComponent, RegisterComponent, HomeComponent, SidebarComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
