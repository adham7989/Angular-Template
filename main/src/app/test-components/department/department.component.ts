import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor( private router : Router) { }

  departments = [
     {"id" : 1 , "course" : "Angular"},
     {"id" : 2 , "course" : "React"},
     {"id" : 3 , "course" : "Node"},
     {"id" : 4 , "course" : "CSS3"},
  ]


  onSelect(dept: any){
    this.router.navigate(['/departments' , dept.id])
  }
  ngOnInit(): void {
  }

}
