import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/Models/Model';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { UniversityDetailsComponent } from '../university-details/university-details.component';

@Component({
  selector: 'app-acadmic-career',
  templateUrl: './acadmic-career.component.html',
  styleUrls: ['./acadmic-career.component.css'],
  standalone: true,
  imports: [RouterLink, UniversityDetailsComponent]
})
export class AcadmicCareerComponent implements OnInit {
  universities:{university:University}[]=[]

  constructor(private service:UserService){

  }
  ngOnInit(): void {
    this.service.academicCareers().subscribe(data=>{
      this.universities=data
    })
  }

}
