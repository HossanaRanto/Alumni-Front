import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSerializer } from 'src/app/Models/Model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  state?:string
  Students?:UserSerializer[]
  canGraduate:boolean=true
  constructor(private router:ActivatedRoute,private service:AdminService){}

  ngOnInit(): void {
    this.router.params.subscribe(param=>{
      this.state=param["state"]
      if(this.state=="student"){
        this.canGraduate=true
      }
      else{
        this.canGraduate=false
      }
      this.service.listStudent(this.state!).subscribe(data=>this.Students=data)
    })
  }
  removeStudent(student:UserSerializer){
    this.Students?.splice(this.Students?.indexOf(student),1)
  }
}
