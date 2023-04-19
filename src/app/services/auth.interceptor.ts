import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenModel } from '../Models/Model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router,private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.has('X-Skip-Interceptor')) {
      // Skip the interceptor and just send the request
      return next.handle(request);
    }
    
    // Check if the request has an Authorization header with a Bearer token
    const authToken = this.auth.GetAccessToken()  
    if (authToken!="") {
      // Decode the JWT to check if it's expired
      const tokenPayload:any = jwtDecode(authToken);
      const currentTime = Date.now() / 1000;
      if (tokenPayload.exp < currentTime) {
        // Token is expired, refresh the token
        const refresh_token=this.auth.GetRefreshToken()
        if(refresh_token==""){
          const error_refresh=new Error("Refresh token not found")
          this.logout()
          return throwError(error_refresh)
        }
        const refreshTokenPayload:any=jwtDecode(refresh_token)
        if(refreshTokenPayload.exp<currentTime){
          const error_refresh=new Error("Refresh token expired")
          this.logout()
          return throwError(error_refresh)
        }
        
        return this.handleRefreshToken(request,next)
        // return;
      }
      // Add the Authorization header with the token to the request
      return next.handle(this.addTokenHeader(request,authToken))
    }
    else{
      this.logout()
      const error=new Error("No token found")
      return throwError(error)
    }
    // return next.handle(request);
  }
  logout(){
    this.auth.Logout()
    this.router.navigate(['/login']);
  }
  handleRefreshToken(request:HttpRequest<any>,next:HttpHandler){
    return this.auth.RefreshToken().pipe(
      tap(token=>{
      }),
      switchMap(data=>{
        this.auth.SetToken(data)
        return next.handle(this.addTokenHeader(request,data.accessToken))
      }),
      catchError((error,res)=>{
        this.logout()
        return []
      })
    )
  }
  addTokenHeader(request:HttpRequest<any>,token:string){
    return request.clone({headers:request.headers.set('Authorization',token)})
  }
}
