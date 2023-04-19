import { AbstractControl, AsyncValidator, AsyncValidatorFn } from "@angular/forms"
import { catchError, map } from "rxjs"
import { UniversityService } from "../services/university.service"

export function universityExist(service:UniversityService): AsyncValidatorFn {
    return (control:AbstractControl)=>{
        return service.checkname(control.value).pipe(
            catchError((error,res)=>{
                return []
            }),
            map(
            res=>{
                return res.isExist?null:{'isExist':true}
            }
        ))
    }
}