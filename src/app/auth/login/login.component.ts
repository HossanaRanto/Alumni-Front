import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Observable, of, Subject, Subscription, tap } from 'rxjs';
import {catchError, switchMap, takeUntil} from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
    this.login$?.unsubscribe()
  }
    
    login$?:Subscription
    error_handler?:Observable<HttpResponse<any>>

    logsubmit(event:Event){
      event.preventDefault()
      // const data =JSON.stringify(this.formdata.value)
      // fetch("https://localhost:5000/user/login",{
      //   method:"POST",
      //   headers:{
      //     "Content-type":"application/json",
      //     "Accept-type":"application/json"
      //   },
      //   body:data
      // }).then(res=>res.json()).then(data=>console.log(data))

      const cancel$=new Subject<{error:string}>()

      cancel$.subscribe(error=>this.toastr.error(error.error,"Erreur"))
      this.login$ = this.service.Login({Username:this.formdata.value.username,Password:this.formdata.value.password})
      .pipe(
        takeUntil(cancel$),
        catchError((error,res)=>{
          cancel$.next(error.error)
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

      // this.login.unsubscribe()
      

      // result.unsubscribe()
    }
    
}
