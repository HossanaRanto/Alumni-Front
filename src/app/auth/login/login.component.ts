import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of, Subject, Subscription, tap } from 'rxjs';
import {catchError, switchMap, take, takeUntil} from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService} from 'ngx-toastr'
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink]
})
export class LoginComponent implements OnDestroy {

    formdata=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    })
    constructor(
      private service:AuthService,
      private router:Router,
      private toastr:ToastrService){

    }
  ngOnDestroy(): void {
  }

    logsubmit(event:Event){
      event.preventDefault()
      this.service.Login({Username:this.formdata.value.username,Password:this.formdata.value.password})
      .pipe(
        take(1),
        catchError((error,res)=>{
          this.toastr.show(error.error,"Error")
          return []
        }),
        tap(res=>{
          this.service.SetToken(res)
          if(res.role=="admin"){
            this.router.navigate(["/admin"])
          }
          else{
            this.router.navigate(["/home"])
          }
        })
      )
      .subscribe()
    }
    
}
