import { Component, ComponentRef, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Request, RequestSerializer } from 'src/app/Models/Model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent{

  acceptRequest$!:Observable<any>
  rejectRequest$!:Observable<any>
  @Input() Request?:RequestSerializer

  constructor(private service:AdminService){}

  acceptRequest(e:Event){
    e.preventDefault()
    this.acceptRequest$=this.service.acceptRequest(this.Request?.request.id!)

    this.acceptRequest$.subscribe()
    // this.component.destroy()
  }
  rejectRequest(e:Event){
    e.preventDefault()
    this.rejectRequest$=this.service.rejectRequest(this.Request?.request.id!)

    this.rejectRequest$.subscribe()
    // this.component.destroy()
  }
}
