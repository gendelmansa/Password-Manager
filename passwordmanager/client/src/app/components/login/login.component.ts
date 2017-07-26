import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
 
import { LoginText, LOGINTEXT } from './logintext'

@Component({
  
  animations: [
   
    trigger('btnClick', [
      
      state('inactive', style({
       
        backgroundColor: '#698095',
      
        transform: 'scale(1)'
    
  })), 

      state('active', style({

        backgroundColor:'#698095',

        border: '3px #697993 inset',

        transform: 'scale(1)'
      
    })),

   
    
    transition('active => inactive', animate('100ms ease-out'))
   
    ])

  ],


  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent  { 

  logintext = LOGINTEXT
  
  
  state:string = 'inactive'
   
  toggleState(){
  this.state = (this.state === 'active' ? 'inactive' : 'active');
    setTimeout(()=>{this.state = (this.state === 'active' ? 'inactive' : 'inactive')}, 50)
}

 
  newprofile = false;
  
  
  
  toggleRegister() {
    this.newprofile=!this.newprofile
  }

  constructor(){console.log(this.logintext)
  console.log(this.logintext)}
}
