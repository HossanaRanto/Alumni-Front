import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanMatch {

  constructor(private service:AuthService,private router:Router){

  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const token=this.service.GetAccessToken()
      if(token==""){
        this.router.navigate(["/login"])
        return false
      }

      return this.service.GetRole().pipe(
        map(role=>{
          if(role.role!="admin"){
            this.router.navigate(["/home"])
            return false
          }
          return true
        })
      )
  }
}
