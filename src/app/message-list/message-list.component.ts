import { Component, OnInit } from '@angular/core';
import {DatabaseService} from './../database.service';
import { IMessage } from '../Models/IMessage';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: IMessage[];

  constructor(private databaseService: DatabaseService) {
   }

  ngOnInit(): void {
  }

  async populateList(){
    
  }

}
