import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  
  ngOnInit(): void {
  }

  public age = 22 ;
  @Input() userName : any ;
  @Output() newItemEvent = new EventEmitter();
  message : string | undefined ;
  private loggedIn: boolean = false;

  addNewItem(value :  string){
    this.newItemEvent.emit(value);
  }

  @Input()
  set loggedInSetter(value : boolean){
    this.loggedIn = value ;
    if(value  == true){
      this.message = 'Welcome Back adham ' ;
  }
  else {
    this.message = 'please log in ' ;
  
  }
  }
  get loggedInGetter(){
    return this.loggedIn ;
  }

}
