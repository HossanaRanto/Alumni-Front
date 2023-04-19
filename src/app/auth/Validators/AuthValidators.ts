import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn } from "@angular/forms";
import { catchError, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";


export function userExist(service:AuthService): AsyncValidatorFn {
    return (control:AbstractControl)=>{
        return service.CheckUsername(control.value).pipe(
            catchError((error,res)=>{
                console.log(error.message)
                return []
            }),
            map(
            res=>{
                return res.valid?null:{'userExist':true}
            }
        ))
    }
}
export function emailExist(service:AuthService): AsyncValidatorFn {
    return (control:AbstractControl)=>{
        return service.CheckEmail(control.value).pipe(map(
            res=>res.valid?null:{'emailExist':true}
        ))
    }
}
export function birthDate():ValidatorFn{
    return (control:AbstractControl)=>{
        const birthdate=new Date(control.value)
        const now=new Date()
    
        if(now.getFullYear()-birthdate.getFullYear()<13){
            return {'underAge':true}
        }
        return null
    }
    
}
export function onlyNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value === null || value === '') {
        // if the control is empty, return null (valid)
        return null;
      }
  
      // define a regular expression to match numeric characters
      const pattern = /^[0-9]*$/;
      if (!pattern.test(value)) {
        // if the control's value does not match the pattern, return an error object
        return { onlyNumbers: true };
      }
  
      // return null (valid) if the control's value matches the pattern
      return null;
    };
  }
  
  
  
  
  


