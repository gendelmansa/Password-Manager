export class SideBarText {
 constructor( 
 public text: string,
 public state = 'inactive'
 ) {}
  
 toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }


}

export var All_TEXT = [
  'Vault',
  'Account',
  'Create a new safe',
  'Logout'
].map(text => new SideBarText(text))






