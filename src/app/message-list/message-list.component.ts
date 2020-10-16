import { Component, OnInit } from '@angular/core';
import {DatabaseService} from './../database.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

}
