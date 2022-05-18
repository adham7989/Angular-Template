import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , Validators} from '@angular/forms';

declare function register() : any 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private fb : FormBuilder ) { }
  ngOnInit(): void {

  }
  registrationForm = this.fb.group({
    firstName : ['adham' , [Validators.required ]],
    lastName : ['azzet', [Validators.required]],
    email : ['adham@gmail' , [Validators.required , Validators.email]],
    password :['default' , [Validators.required]],
  });

  resetData(){
    this.registrationForm.setValue({
    firstName : (''),
    lastName : (''),
    email : (''),
    password :(''),      
    })
    ;
  }
  submitData(){
    if(this.registrationForm.valid) {
    console.log(this.registrationForm.value);
    localStorage.setItem('firstName' , this.registrationForm.value.firstName );
    localStorage.setItem('lastName' , this.registrationForm.value.lastName);
    localStorage.setItem('email' , this.registrationForm.value.email);
    localStorage.setItem('password' , this.registrationForm.value.password);
    window.location.href='signin';
    }else{
      alert('fill the data first')
    }

  }

  // getter methods for all formControl

  get getFirstName()  {

      return this.registrationForm.get('firstName') as FormControl ;
  }

  get getLastName(){
    return this.registrationForm.get('lastName') as FormControl ;
  }
  get getEmail(){
    return this.registrationForm.get('email') as FormControl ;
  }
  get getPassword(){
    return this.registrationForm.get('password') as FormControl ;
  }




  // addUSers(user : any){
  //   let users : any = [] ;
  //   if (localStorage.getItem('firstName')){
  //     users = JSON.stringify(localStorage.getItem('firstName'));
  //     users = [ user , ...users];
  //   }
  //   else {
  //     users = user ;
  //     localStorage.setItem('Users' , JSON.stringify(users))
  
  // }


  }

  







