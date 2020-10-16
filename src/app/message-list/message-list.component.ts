import { Component, OnInit } from '@angular/core';
import {DatabaseService} from './../database.service';
import { IMessage } from '../Models/IMessage';
import { IgetAllMessagesResponse } from '../Models/IResponses';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: IMessage[];

  constructor(private databaseService: DatabaseService) {
    this.databaseService.loadTasks()
      .subscribe(
        (value: IgetAllMessagesResponse) => this.messages = value.data.listPraveenTestMessages.items,
        (err) => console.log(err),
        () => console.log('complete')
      );
   }

  ngOnInit(): void {
  }

}
