import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/Models/Model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {

  constructor() { }

  user_emitter=new EventEmitter<User>()

  profilScroll=new EventEmitter<Event>()

  sendData(user:User){
    this.user_emitter.emit(user)
  }

  setScroll(event:Event){
    this.profilScroll.emit(event)
  }
}
