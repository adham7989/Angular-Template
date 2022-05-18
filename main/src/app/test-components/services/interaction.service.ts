import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {


  constructor() { }

  private teacherMessageSource = new Subject();
  teacherMessage = this.teacherMessageSource.asObservable();
 

  sendMessage(message : string){
    this.teacherMessageSource.next(message);
  }

}
