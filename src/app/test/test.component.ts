import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    standalone: false
})
export class TestComponent implements OnInit {
  constructor(private service:AuthService){

  }
  test$?:Observable<{message:string}>
  ngOnInit(): void {
    this.test$=this.service.test()
  }
}
