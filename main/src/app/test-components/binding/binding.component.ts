import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {


  data = "binding data from class to template" ;
  imgUrl = "https://picsum.photos/200" ;
  counter : number = 0 ;
  name : string = "adham" ;
  private custName : any ;

  ngOnInit(): void {
  }

  increament(){
    this.counter ++ ;
  }

  set customerName(value : string){
    this.custName = value;
    if( value == 'adham')
    alert('hello adham')
  }

  get customerName(){
    return this.custName ;
  }
    
  }
