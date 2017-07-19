export class LoginText {
    constructor(
    public name:string,
    public state = 'inactive',
    public message:string
    ) {}
  toggleState(){
  this.state = (this.state === 'active' ? 'inactive' : 'active');
}

}

export var LOGINTEXT = [
{ name:'Login',message:'Forgot your password: ' }, 
{ name:'forgot', message:'Forgot your password: '}, 
{ name:'register', message:''}, 
{ name:'create', message:''}

].map((name, message) => new LoginText(name, message))

