import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
 
import { LoginText, LOGINTEXT } from './logintext'
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'

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

export class LoginComponent implements OnInit  { 
  form: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLoginSubmit() {
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
  }

  logintext = LOGINTEXT
  
  
  state:string = 'inactive'
   


 
  newprofile = false;
  
  
  
  toggleRegister() {
    this.newprofile=!this.newprofile
  }

  ngOnInit() {}
}
