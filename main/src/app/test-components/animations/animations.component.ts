import { Component, OnInit } from '@angular/core';
import { trigger , state , style , transition , animate , keyframes , group  } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations : [
    trigger('lightOnOff' , [
      state('off' , style({
        backgroundColor : 'red',
        border : '10px solid yellow',
      })),
      state('on' , style({
        backgroundColor : 'yellow',
        border : '10px solid red',

      })),
      transition('off => on' , [animate('3s  ease-in')]),
      transition('on => off' , [animate('3s  ease-out') ]),
    ])
  ]
})
export class AnimationsComponent  {

  constructor() { }

  roomState : string = 'on';
  
  
  toogleLight(){

    this.roomState = (this.roomState === "off") ? "on" : "off";
    
    // if(this.roomState === 'off') this.roomState='on'
    // else this.roomState='off';
  };

}
