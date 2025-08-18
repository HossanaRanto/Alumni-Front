import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LastMessage } from 'src/app/Models/Model';
import { ChatService } from '../../services/chat.service';
import { OldchatComponent } from '../oldchat/oldchat.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-oldchatlist',
  templateUrl: './oldchatlist.component.html',
  styleUrls: ['./oldchatlist.component.css'],
  standalone: true,
  imports: [OldchatComponent, AsyncPipe]
})
export class OldchatlistComponent implements OnInit {
  oldmessages$?:Observable<LastMessage[]>

  offset:number|null=0
  limit:number=15;

  constructor(private service:ChatService){}
  ngOnInit(): void {
    this.oldmessages$=this.service.getRecentChat(this.offset,this.limit)
  }

}
