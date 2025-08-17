import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'
import { BASE_URL } from './api';
import { Authentication, TokenModel, User, UserSerializer } from '../Models/Model';
import { catchError, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  ACCESS_TOKEN="access-token"
  REFRESH_TOKEN="refresh-token"
  constructor(private request:HttpClient,private router:Router) {
    
  }
  Login(data:Authentication):Observable<TokenModel> {
    const header=new HttpHeaders({
      'X-Skip-Interceptor':'true'
    })
    return this.request.post<TokenModel>(BASE_URL+"user/login",data,{
      headers:header
    })
  }
  Logout(){
    localStorage.removeItem(this.ACCESS_TOKEN)
    localStorage.removeItem(this.REFRESH_TOKEN)

    this.router.navigate(['/login'])    
  }

  Register(data:any){
    return this.request.post<UserSerializer>(BASE_URL+"user",data)
  }
  CheckUsername(username:string){
    const header=new HttpHeaders({
      'X-Skip-Interceptor':'true'
    })
    return this.request.get<{message:string,valid:string}>(BASE_URL+"user/checkusername/"+username,{
      headers:header
    })
  }
  CheckEmail(email:string){
    const header=new HttpHeaders({
      'X-Skip-Interceptor':'true'
    })
    return this.request.get<{message:string,valid:string}>(BASE_URL+"user/checkemail/"+email,{
      headers:header
    })
  }

  RefreshToken():Observable<TokenModel>{
    const refresh_token= this.GetRefreshToken()
    const header=new HttpHeaders({
      'X-Skip-Interceptor':'true'
    })
    return this.request.get<TokenModel>(BASE_URL+"user/refresh_token/"+refresh_token,{
      headers:header
    })
  }

  GetRole(){
    return this.request.get<{role:string}>(BASE_URL+"user/role")
  }

  SetToken(token:TokenModel){
    localStorage.setItem(this.ACCESS_TOKEN,token.accessToken)
    localStorage.setItem(this.REFRESH_TOKEN,token.refreshToken)
    localStorage.setItem("user",JSON.stringify(token.user))
  }
  getToken():TokenModel|null{
    const token = localStorage.getItem("token")
    if(token==null)return token

    return JSON.parse(token)
  }
  GetAccessToken(){
    return localStorage.getItem(this.ACCESS_TOKEN)||""
  }
  GetRefreshToken(){
    return localStorage.getItem(this.REFRESH_TOKEN)||""
  }
  test(){
    return this.request.get<{message:string}>(BASE_URL+"user/test")
  }
}
