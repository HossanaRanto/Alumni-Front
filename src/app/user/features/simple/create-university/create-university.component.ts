import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCamera, faSave } from '@fortawesome/free-solid-svg-icons';
import { catchError, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UniversityService } from 'src/app/user/services/university.service';
import { universityExist } from 'src/app/user/Validators/university-validator';

@Component({
    selector: 'app-create-university',
    templateUrl: './create-university.component.html',
    styleUrls: ['./create-university.component.css'],
    standalone: false
})
export class CreateUniversityComponent {
  faCam=faCamera
  imageUrl?:string="assets/test.jpg"
  save=faSave
  imageFile:any=null

  data=new FormGroup({
    name:new FormControl('',{
      asyncValidators:universityExist(this.service)
    }),
    description:new FormControl('',[Validators.minLength(1)]),
    contact:new FormControl(''),
    email:new FormControl('',[Validators.email])
  })
  constructor(private service:UniversityService,private auth:AuthService){

  }
  changeImage(event:any){
    const reader=new FileReader()
    reader.onload=(e)=>{
      this.imageUrl!=e.target?.result!
    }

    reader.readAsDataURL(event.target.files[0])
    this.imageFile=event.target.files[0]
  }

  saveUniversity(event:Event){
    event.preventDefault()
    const imageData=new FormData()
    imageData.append('file',this.imageFile)

    this.service.createUniversity(this.data.value).pipe(
      switchMap(res=>{
        return this.service.changeUniversityImage(imageData)
      }),
      tap(res=>{
        this.auth.Logout()
      }),
      catchError((error,res)=>{
        return []
      })
    ).subscribe()
  }
}
