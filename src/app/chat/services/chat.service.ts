import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LastMessage, Message } from 'src/app/Models/Model';
import { BASE_URL } from 'src/app/services/api';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  getRecentChat(offset:number|null,limit:number|null){
    let url=BASE_URL+"message/last_interaction"
    if(offset!=null && limit!=null){
      url+="?offset="+offset+"&limit="+limit
    }
    return this.http.get<LastMessage[]>(url)
  }
  getMessages(user:number,offset:number|null,limit:number|null){
    let url=BASE_URL+"message/"+user
    if(offset!=null && limit!=null){
      url+="?offset="+offset+"&limit="+limit
    }
    return this.http.get<Message[]>(url)
  }
  sendMessage(data:{To:number,Content:string}){
    return this.http.post<Message>(BASE_URL+"message/send",data)
  }
}
