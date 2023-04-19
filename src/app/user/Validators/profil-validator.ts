import { AbstractControl, AsyncValidator, AsyncValidatorFn } from "@angular/forms"
import { catchError, map } from "rxjs"
import { UserService } from "../services/user.service"

export function userExist(service:UserService): AsyncValidatorFn {
    return (control:AbstractControl)=>{
        return service.CheckUsername(control.value).pipe(
            catchError((error,res)=>{
                return []
            }),
            map(
            res=>{
                return res.valid?null:{'userExist':true}
            }
        ))
    }
}
export function emailExist(service:UserService): AsyncValidatorFn {
    return (control:AbstractControl)=>{
        return service.CheckEmail(control.value).pipe(map(
            res=>res.valid?null:{'emailExist':true}
        ))
    }
}