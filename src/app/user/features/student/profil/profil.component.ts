import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { birthDate, onlyNumbersValidator } from 'src/app/auth/Validators/AuthValidators';
// import { birthDate, emailExist, onlyNumbersValidator, userExist } from 'src/app/auth/Validators/AuthValidators';
import { User, UserSerializer } from 'src/app/Models/Model';
import { AuthService } from 'src/app/services/auth.service';
import { ExchangeDataService } from 'src/app/user/services/exchange-data.service';
import { UserService } from 'src/app/user/services/user.service';
import { emailExist, userExist } from 'src/app/user/Validators/profil-validator';

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.css'],
    standalone: false
})
export class ProfilComponent implements OnInit {
  camera=faCamera
  profilUrl:string|ArrayBuffer|null=""
  coverUrl:string|ArrayBuffer|null=""

  currentUser!:UserSerializer

  

  @Output() userLoaded=new EventEmitter<User>()
  constructor(
    private service:UserService,
    private exchange_servicce:ExchangeDataService){}
  ngOnInit(): void {
    this.service.getUserInfo().subscribe(data=>{
      this.currentUser=data
      this.profilUrl=this.currentUser.profilPicture
      this.coverUrl=this.currentUser.coverPicture
      this.exchange_servicce.sendData(this.currentUser.user)
    })
  }
  onchangeProfilPicture(event:any){
    const reader=new FileReader()
    reader.onload=(e)=>{
      this.profilUrl=e.target?.result!
    }

    reader.readAsDataURL(event.target.files[0])

    this.service.updatePicture(event.target.files[0],"profil")
  }
  onchangeCoverPicture(event:any){
    const reader=new FileReader()
    reader.onload=(e)=>{
      this.coverUrl=e.target?.result!
    }

    reader.readAsDataURL(event.target.files[0])
    this.service.updatePicture(event.target.files[0],"cover")
  }

  onScroll(event:Event){
    this.exchange_servicce.setScroll(event)
  }
}
