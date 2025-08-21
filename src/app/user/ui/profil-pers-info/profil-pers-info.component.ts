import { DatePipe } from '@angular/common';
import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import { birthDate, onlyNumbersValidator } from 'src/app/auth/Validators/AuthValidators';
import { User } from 'src/app/Models/Model';
import { ExchangeDataService } from '../../services/exchange-data.service';
import { UserService } from '../../services/user.service';
import { emailExist, userExist } from '../../Validators/profil-validator';

@Component({
  selector: 'app-profil-pers-info',
  templateUrl: './profil-pers-info.component.html',
  styleUrls: ['./profil-pers-info.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ProfilPersInfoComponent implements OnInit{

  user?:User
  isChangePassword:boolean=false
  service = inject(UserService)

  constructor(
    private toastr:ToastrService,
    private exchange_service:ExchangeDataService,
    private date_pipe:DatePipe){}


  ngOnInit(): void {
    this.exchange_service?.user_emitter.subscribe(data=>{
      this.user=data
      this.form_data.patchValue({
        username:this.user.username,
        password:this.user.password,
        confirmpassword:this.user.confirmpassword!,
        firstname:this.user.firstname,
        lastname:this.user.lastname!,
        gender:this.user.gender,
        birthdate:this.date_pipe.transform(this.user.birthdate,"yyyy-MM-dd"),
        email:this.user.email,
        address:{
          country:this.user.address?.country,
          city:this.user.address?.city,
          postalcode:this.user.address?.postalcode
        },
        
      })
    })
  }

    country_list:string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  address_data=new FormGroup({
    country:new FormControl(this.country_list[0],[Validators.required]),
    city:new FormControl('',[Validators.required]),
    postalcode:new FormControl(0,[Validators.required,onlyNumbersValidator])
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

  update(e:Event){
    e.preventDefault()

    this.service.updateProfil(this.form_data.value,this.isChangePassword)
    .pipe(
      catchError((error,res)=>{
        this.toastr.error("There is an error","Error")
        console.log(error)
        return []
      }),
      tap(result=>{
        this.toastr.show("Profil updated","Success")
        console.log(result)
      })
    )
    .subscribe()
  }

  canChangePassword(event:Event){
    this.isChangePassword=!this.isChangePassword
  }
}
