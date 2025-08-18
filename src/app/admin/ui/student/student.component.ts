import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClose, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import { User, UserSerializer } from 'src/app/Models/Model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  standalone: true
})
export class StudentComponent {
  close=faClose
  trash=faTrash

  @Input() Student?:UserSerializer
  @Input() canGraduate?:boolean
  @Output() graduate_emitter=new EventEmitter<UserSerializer>()

  constructor(private service:AdminService,private toastr:ToastrService){}

  graduate(){
    this.service.graduate(this.Student?.user.id!).pipe(
      tap(result=>{
        this.graduate_emitter.emit(this.Student!)
        this.toastr.info("Student graduated successfuly","Success")
      }),
      catchError((error,res)=>{
        this.toastr.error(error.error,"Error")
        return []
      })
    ).subscribe()
  }
}
