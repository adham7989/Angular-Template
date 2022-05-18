import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
// import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {

    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef)
 
    // this.childComponentRef.message = 'message from parent component ' ;
  }


  // for @input
  name : string = "Msg from child component ";
  
  // for @output
  public items = ['item1' , 'item2' , 'item3']
  
  // for getters&setters 
  userLoggedIn : boolean = true ;
  
  
  // for @viewChild access dom 

  public fname : string | undefined  ;
  public userName : string | undefined ;
  public customerName : string | undefined ;
  @ViewChild('nameRef') nameElementRef!: ElementRef;


  // for @viewChild access child component 

  // for @viewChild access child component 


  @ViewChild(ChildComponent)
  childComponentRef!: ChildComponent;


    ngOnInit(): void {
  }

  addNewItem(newItem : string ){
    this.items.push(newItem)
  }

  

}
