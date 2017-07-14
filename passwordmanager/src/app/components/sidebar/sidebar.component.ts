import { Component } from '@angular/core';

import{ trigger, state, style, animate, transition } from '@angular/animations'

import { SideBarText } from './sidebartext'

@Component({
   animations: [
   
    trigger('hover', [
      
      state('inactive', style({
       
        backgroundColor: '#eee',
      
        transform: 'scale(1)'
    
  })), 

      state('active', style({

        backgroundColor:'#696969',

        transform: 'scale(1.2)'
      
    })),

    transition('inactive => active', animate('100ms ease-in')),
    
    transition('active => inactive', animate('100ms ease-out'))
   
    ])

  ],
  moduleId:module.id,
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})




export class SidebarComponent{
 
 sidetext= [
    new SideBarText('Vault'),
    new SideBarText('Account'),
    new SideBarText('Create a new safe',),
    new SideBarText("Logout")
  ];

}
