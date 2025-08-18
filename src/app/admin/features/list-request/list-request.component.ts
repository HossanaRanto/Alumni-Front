import { Component, OnInit } from '@angular/core';
import { RequestSerializer } from 'src/app/Models/Model';
import { AdminService } from '../../services/admin.service';
import { RequestComponent } from '../../ui/request/request.component';

@Component({
  imports: [RequestComponent],
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css'],
  standalone: true
})
export class ListRequestComponent implements OnInit{
  Requests!:RequestSerializer[]

  constructor(private service:AdminService){}
  ngOnInit(): void {
    this.service.listRequest().subscribe(data=>this.Requests=data)
  }

}
