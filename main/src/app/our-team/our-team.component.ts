import { Component, OnInit } from '@angular/core';
import { TeamApiService } from '../allservice/team-api.service';
import { Photos } from '../interfaces/photos';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {


  team : User[] = [] ; 
  // allTeam : User[] = [] ;
  // photos : Photos[] = [] ;
  

  constructor(private api : TeamApiService ) { }

  ngOnInit(): void {
    this.onGetData();
    // this.onGetPhoto();
    // this.onGetJobName();
  }

  onGetData():void {
    this.api.getTeamNames().subscribe(
      (response : any ) => this.team = response,
       (error) => console.log(error) ,
      () => console.log('Data Fetched Successfully')
    )
  };

}
