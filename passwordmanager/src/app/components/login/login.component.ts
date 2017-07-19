import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
 
import { LoginText, LOGINTEXT } from './logintext'

@Component({
  
  animations: [
   
    trigger('btnClick', [
      
      state('inactive', style({
       
        backgroundColor: '#404040',
      
        transform: 'scale(1)'
    
  })), 

      state('active', style({

        backgroundColor:'#696969',

        transform: 'scale(1)'
      
    })),

    transition('inactive => active', animate('100ms ease-in')),
    
    transition('active => inactive', animate('100ms ease-out'))
   
    ])

  ],


  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent  { 

  logintext = LOGINTEXT
  
  loginmessage = ['Forgot your password: ', 'Do not have an account: ']
 toggleStateOne() {
   this.logintext[0].state = (this.logintext[0].state === 'active' ? 'inactive' : 'active')
  

}
 
  newprofile = false;
  
  
  
  toggleregister() {
    this.newprofile=!this.newprofile
  }

  constructor(){console.log(this.logintext)
  console.log(this.logintext[0].state)}
}
