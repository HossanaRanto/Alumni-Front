import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import { UniversityView } from 'src/app/Models/Model';
import { UniversityService } from '../../services/university.service';

@Component({
    selector: 'app-university-detail',
    templateUrl: './university-detail.component.html',
    styleUrls: ['./university-detail.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class UniversityDetailComponent implements OnInit{
  university_id!:number
  University?:UniversityView

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:UniversityService,
    private toaster:ToastrService){}
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.university_id=param["id"]
      this.service.getUniversity(this.university_id).subscribe(data=>this.University=data)
    })
  }
  
  sentRequest(event:Event){
    this.service.sendRequest(this.University?.university.id!)
    .pipe(
      tap(data=>{
        this.University?.isRequestSent!=true
      }),
      catchError((error,res)=>{
        this.toaster.error("Can't send request","Error")
        return []
      })
    )
  }
}
