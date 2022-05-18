import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("the page you looking for is not found");
  //   setTimeout( ()=> {

  //     window.location.href.match('home')
  //   },1500 );
  // }

}
}