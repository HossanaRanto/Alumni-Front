import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(private service:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const token = this.service.GetAccessToken()
      if(token==""){
        return true
      }

      return this.service.GetRole().pipe(
        map(role=>{
          if(role.role=="admin"){
            this.router.navigate(["/admin"])
          }
          else{
            this.router.navigate(["/user"])
          }
          return false
        })
      )
  }
  
}
