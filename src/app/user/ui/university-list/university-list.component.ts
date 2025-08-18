import { Component, OnInit } from '@angular/core';
import { UniversityView } from 'src/app/Models/Model';
import { UniversityService } from '../../services/university.service';
import { RouterLink } from '@angular/router';
import { UniversityItemComponent } from '../university-item/university-item.component';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css'],
  standalone: true,
  imports: [RouterLink, UniversityItemComponent]
})
export class UniversityListComponent implements OnInit{
  universities!:UniversityView[]

  constructor(private service:UniversityService){

  }
  ngOnInit(): void {
    this.service.getUniversities().subscribe(data=>this.universities=data)
  }

}
