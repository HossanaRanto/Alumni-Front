import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Point } from 'src/app/Models/Model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
    selector: 'app-point',
    templateUrl: './point.component.html',
    styleUrls: ['./point.component.css'],
    standalone: false
})
export class PointComponent implements OnInit{
  
  point?:Point
  point$?:Observable<Point>
  constructor(private service:UserService){}
  

  ngOnInit(): void {
    this.service.getPoint().subscribe(point=>{
      this.point=point
    })
  }
}
