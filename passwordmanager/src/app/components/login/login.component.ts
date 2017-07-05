import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent  { 
 
  newprofile = false;
  
  toggleregister() {
    this.newprofile=!this.newprofile
  }
}
