import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, retry, Subject, takeUntil, tap } from 'rxjs';
import { User } from 'src/app/Models/Model';
import { HTTP_REQUEST_MAX_TRY } from 'src/app/services/api';
import { AuthService } from 'src/app/services/auth.service';
import { birthDate, emailExist, onlyNumbersValidator, userExist } from '../Validators/AuthValidators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class RegisterComponent implements OnInit,OnDestroy {
  service = inject(AuthService)
  constructor(private route:Router,private toaster:ToastrService){}
  ngOnDestroy(): void {

  }
  ngOnInit(): void {

  }

  @ViewChild("type") type_account?:ElementRef

  country_list:string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  address_data=new FormGroup({
    country:new FormControl(this.country_list[0],[Validators.required]),
    city:new FormControl('',[Validators.required]),
    postalcode:new FormControl('',[Validators.required,onlyNumbersValidator])
  })
  form_data=new FormGroup({
    username:new FormControl('',{
      validators:[Validators.required],
      asyncValidators:[userExist(this.service)]
    }),
    password:new FormControl('',{
      validators:[Validators.required,Validators.minLength(8)]
    }),
    confirmpassword:new FormControl('',[Validators.required]),
    email:new FormControl('',{
      validators:[Validators.email,Validators.required],
      asyncValidators:[emailExist(this.service)]
    }),
    firstname:new FormControl('',[Validators.required,Validators.maxLength(155)]),
    lastname:new FormControl(),
    gender:new FormControl(true),
    birthdate:new FormControl('',[Validators.required,birthDate()]),
    contact:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(7),onlyNumbersValidator()]),
    address:this.address_data
  })

  register(event:Event){
    event.preventDefault()

    if(!this.form_data.valid){
      this.toaster.error("Some errors has occured","Error")
      return
    }

    const cancel$=new Subject<{error:string}>()

    cancel$.pipe(tap(e=>this.toaster.error(e.error,"Erreur"))).subscribe()

    this.service.Register(this.form_data.value).pipe(
      tap(res=>{
        this.route.navigate(['/login'])
      }),
      catchError((error,res)=>{
        this.toaster.error(error.error,"Erreur")
        return []
      })
      
    ).subscribe()


  }
  
}
