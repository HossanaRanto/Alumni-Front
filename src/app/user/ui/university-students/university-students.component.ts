import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSerializer } from 'src/app/Models/Model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-university-students',
  templateUrl: './university-students.component.html',
  styleUrls: ['./university-students.component.css']
})
export class UniversityStudentsComponent implements OnInit {

  university_id!:number
  state!:string
  Students!:UserSerializer[]

  constructor(private router:ActivatedRoute,private service:UniversityService){}
  ngOnInit(): void {
    this.router.parent?.params.subscribe(param=>{
      this.university_id=param["id"]
      this.service.getStudents(this.university_id,this.state).subscribe(data=>
        this.Students=data)
    })
    this.router.params.subscribe(param=>{
      this.state=param["state"]
      this.service.getStudents(this.university_id,this.state).subscribe(data=>
        this.Students=data)
    })
  }
}
