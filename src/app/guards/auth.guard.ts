import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../user/services/user.service';
import { catchError, EMPTY, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const userService = inject(UserService)
  const router = inject(Router)
  const token = authService.GetAccessToken()

  if(token === ""){
    router.navigate(["/", "login"])
    return false
  }

  return userService.getUserInfo().pipe(
    catchError((error)=>{
      router.navigate(["/", "login"])
      return EMPTY
    }),
    switchMap((user) => {
      return of(true)
    })
  )
};
