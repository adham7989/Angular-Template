import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-department-details-component',
  templateUrl: './department-details-component.component.html',
  styleUrls: ['./department-details-component.component.css']
})
export class DepartmentDetailsComponentComponent implements OnInit {

  constructor(private router : Router , private activatedRoute :  ActivatedRoute) { }

  public departmentID : any ;
  public courseName : any ;

  ngOnInit(): void {
   
    let id =  this.activatedRoute.snapshot.params['id'];
    this.departmentID = id ;
  //  let course = this.activatedRoute.snapshot.params['course'];
  //  this.courseName = course;
  }

  // ngOnInit(): void {
  //     this.activatedRoute.params.subscribe((params : Params)=> {
  //       let id = parseInt(params['id']);
  //       this.departmentID = id ;
  //     }
  //     )
  // }

  goPrevious(){
    let previousId = (this.departmentID  = this.departmentID  - 1 ); 
    this.router.navigate(['/departments' , previousId])
  }

  goNext(){
    let nextId = ( this.departmentID =  this.departmentID + 1 );
    this.router.navigate(['/departments' , nextId]);
  }



}
