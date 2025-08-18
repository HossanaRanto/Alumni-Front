import { Component, OnInit } from '@angular/core';
import { UniversityView } from 'src/app/Models/Model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css'],
  standalone: true
})
export class UniversityListComponent implements OnInit{
  universities!:UniversityView[]

  constructor(private service:UniversityService){

  }
  ngOnInit(): void {
    this.service.getUniversities().subscribe(data=>this.universities=data)
  }

}
