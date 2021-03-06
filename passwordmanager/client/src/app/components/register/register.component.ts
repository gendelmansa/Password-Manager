import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'

function customValid(c:FormControl) {
  return c.value !== 'cat' ? null : {
    customValid: {
      valid: false
    }
  }
}

@Component({
    moduleId:module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit { 
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService 
  ){
    this.createForm()
  }
  
 

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30), this.validateEmail ])],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(7), Validators.maxLength(30), this.validatePassword ])]
    })
  }

  validateEmail(controls) {

      const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      if(regExp.test(controls.value)) {
        return null

      } else { 
        
        return{'validateEmail': true }
      
      }
  }

    validatePassword(controls) {

      const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/)

      if(regExp.test(controls.value)) {
        return null

      } else { 
        
        return{'validatePassword': true }
      
      }
  }
  onRegisterSubmit() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
    
    this.authService.registerUser(user).subscribe(data => {
      console.log(data)
    })
    console.log()
    
  }

ngOnInit() {
  
} 

}