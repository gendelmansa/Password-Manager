import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  
  animations: [
   
    trigger('btnClick', [
      
      state('inactive', style({
       
        backgroundColor: '#eee',
      
        transform: 'scale(1)'
    
  })), 

      state('active', style({

        backgroundColor:'#696969',

        transform: 'scale(1.1)'
      
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
 
  newprofile = false;
  
  toggleregister() {
    this.newprofile=!this.newprofile
  }
}
