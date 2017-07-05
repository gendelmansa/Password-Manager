import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';

import { LoginComponent } from './components/login/login.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LoginComponent, NavbarComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
