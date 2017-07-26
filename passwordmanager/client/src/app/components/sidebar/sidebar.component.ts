import { Component } from '@angular/core';

import{ trigger, state, style, animate, transition } from '@angular/animations'

import { SideBarText, All_TEXT } from './sidebartext'



@Component({

  moduleId:module.id,
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.css'],

  animations: [
    trigger('hover', [
      state('inactive', style({
        transform: 'scale(1)',
      })),
      state('active', style({
        transform: 'scale(1.2)',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})



export class SidebarComponent{
    
  sidetext = All_TEXT
  
  

  

   
    





  


constructor(){console.log(this.sidetext)}
}