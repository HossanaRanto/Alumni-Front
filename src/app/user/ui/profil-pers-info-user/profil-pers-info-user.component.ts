import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Model';
import { ExchangeDataService } from '../../services/exchange-data.service';

@Component({
    selector: 'app-profil-pers-info-user',
    templateUrl: './profil-pers-info-user.component.html',
    styleUrls: ['./profil-pers-info-user.component.css'],
    standalone: false
})
export class ProfilPersInfoUserComponent implements OnInit{
  user?:User
  gender_string:string="Boy/Man"
  constructor(private exchange_service:ExchangeDataService){

  }
  ngOnInit(): void {
    this.exchange_service.user_emitter.subscribe(data=>{
      this.user=data
      if(this.user.gender){
        this.gender_string="Boy/Man"
      }
      else{
        this.gender_string="Girl/Woman"
      }
    })
  }
}
