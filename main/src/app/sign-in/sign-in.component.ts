import { Component, OnInit } from '@angular/core';

// declare function login() : any

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

})
export class SignInComponent implements OnInit {

  constructor() { }

  user = {} ;

  ngOnInit(): void {
    
    }
  
    public mail ='' ;
    public password = '';

    
  
    submitData(){

      // console.log(`email :- ${this.mail} - password :- ${this.password}`);
      if( localStorage.getItem('email') == this.mail && localStorage.getItem('password') == this.password )
      {
        alert('login success');
        window.location.href = 'home' ;
      }
      
      else if (localStorage.getItem('email') == null || localStorage.getItem('password') == null ){

        alert('You Have to Register First');
        window.location.href = 'signup' ;
      }
      else if (localStorage.getItem('email') != this.mail ){
        alert('this email is not found')
      }
      else if (localStorage.getItem('password') != this.password)
      {
        alert('password is incorrect')
      }
      
      
      }
  

  resetData(){
    this.mail = '' ;
    this.password = '';
  }

  


}
