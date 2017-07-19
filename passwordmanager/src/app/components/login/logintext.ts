export class LoginText {
    constructor(
    public name:string,
    public state = 'inactive',
    public message:string,
    public path:string
    ) {}
  toggleState(){
  this.state = (this.state === 'active' ? 'inactive' : 'active');
    setTimeout(()=>{this.state = (this.state === 'active' ? 'inactive' : 'inactive')}, 50)
}

}

export let LOGINTEXT= [
 new LoginText ('Login', 'inactive', '', ''), 
 new LoginText ('Forgot', 'inactive', 'Forgot your password:', '/forgot'), 
 new LoginText ('Register','inactive', 'Dont have an account: ', '/register')
 

]

