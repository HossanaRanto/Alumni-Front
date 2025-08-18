import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LastMessage } from 'src/app/Models/Model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-oldchatlist',
  templateUrl: './oldchatlist.component.html',
  styleUrls: ['./oldchatlist.component.css'],
  standalone: true
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
