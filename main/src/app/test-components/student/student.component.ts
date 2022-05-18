import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private interactionService : InteractionService) { }

  ngOnInit(): void {
    this.interactionService.teacherMessage.subscribe(
      msg => {
        if(msg === 'Good Morning') {
          alert('Good Morning Teacher');
        }
        else if( msg === 'Well Done') {
           alert ('Thanks Teacher');
          }
      }
    )
  }


}
