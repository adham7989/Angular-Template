import { Component, OnInit } from '@angular/core';
// import { User } from '../user';

declare function checkInput() : void ;

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {

  constructor() { }

  onClick(){
    checkInput();
  }

  reset(){
    window.location.href ='data';
  }
  
  ngOnInit() {
  }
}
