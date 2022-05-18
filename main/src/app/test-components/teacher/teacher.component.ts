import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor( private interactionService : InteractionService) { }

  ngOnInit(): void {
  }

  greetStudent(){
    this.interactionService.sendMessage('Good Morning');
  }

  appreciateStudent(){
    this.interactionService.sendMessage('Well Done')
  }
}

