import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenModel } from '../Models/Model';

const logout = (auth: AuthService, router: Router) =>{
  auth.Logout()
  router.navigate(['/login']);
}

const handleRefreshToken = (auth: AuthService, router: Router, request:HttpRequest<any>,next:HttpHandlerFn) =>{
    return auth.RefreshToken().pipe(
      tap(token=>{
      }),
      switchMap(data=>{
        auth.SetToken(data)
        return next(addTokenHeader(request, data.accessToken))
      }),
      catchError((error,res)=>{
        logout(auth, router)
        return []
      })
    )
  }

const addTokenHeader = (request:HttpRequest<any>,token:string) =>{
    return request.clone({headers:request.headers.set('Authorization',token)})
}

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (request.headers.has('X-Skip-Interceptor')) {
      // Skip the interceptor and just send the request
      return next(request);
    }
    
    // Check if the request has an Authorization header with a Bearer token
    const authToken = auth.GetAccessToken()  
    if (authToken!="") {
      // Decode the JWT to check if it's expired
      const tokenPayload:any = jwtDecode(authToken);
      const currentTime = Date.now() / 1000;
      if (tokenPayload.exp < currentTime) {
        // Token is expired, refresh the token
        const refresh_token= auth.GetRefreshToken()
        if(refresh_token==""){
          const error_refresh=new Error("Refresh token not found")
          logout(auth, router)
          return throwError(() => error_refresh)
        }
        const refreshTokenPayload:any=jwtDecode(refresh_token)
        if(refreshTokenPayload.exp<currentTime){
          const error_refresh=new Error("Refresh token expired")
          logout(auth, router)
          return throwError(() => error_refresh)
        }
        
        return handleRefreshToken(auth, router, request, next)
        // return;
      }
      // Add the Authorization header with the token to the request
      return next(addTokenHeader(request,authToken))
    }
    else{
      logout(auth, router)
      const error=new Error("No token found")
      return throwError(() => error)
    }
}
