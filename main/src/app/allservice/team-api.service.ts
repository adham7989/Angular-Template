import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  public apiUrl : string = 'http://localhost:3005/team' 
  // public imgApi : string = 'http://localhost:3005/team' 

  // https://jsonplaceholder.typicode.com/photos

  constructor(private http : HttpClient) { }

  getTeamNames(){
    return this.http.get(`${this.apiUrl}`);
  };

  getTeamPhoto(){
    return this.http.get(`${this.apiUrl}`);
  };
  getJobName(){
    return this.http.get(`${this.apiUrl}`);
  };

}
