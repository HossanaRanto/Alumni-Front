import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from 'src/app/Models/Model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-academic-career-user',
  templateUrl: './academic-career-user.component.html',
  styleUrls: ['./academic-career-user.component.css']
})
export class AcademicCareerUserComponent {
  universities:{university:University}[]=[]


  constructor(private service:UserService,private router:ActivatedRoute){

  }
  ngOnInit(): void {
    this.router.parent?.params.subscribe(param=>{
      this.service.academicCareersFromId(param["id"]).subscribe(data=>{
        this.universities=data
      })
    })
    
  }
}
