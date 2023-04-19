import { Component,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import { UniversityView } from 'src/app/Models/Model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-university-item',
  templateUrl: './university-item.component.html',
  styleUrls: ['./university-item.component.css']
})
export class UniversityItemComponent {
  @Input() University!:UniversityView

  constructor(private service:UniversityService,private toaster:ToastrService){}

  sentRequest(event:Event){
    event.preventDefault()

    this.service.sendRequest(this.University.university.id!)
    .pipe(
      tap(data=>{
        this.University.isRequestSent=true
      }),
      catchError((error,res)=>{
        this.toaster.error("Can't send request","Error")
        return []
      })
    ).subscribe()
  }
}
