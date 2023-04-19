import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSerializer } from 'src/app/Models/Model';
import { ExchangeDataService } from 'src/app/user/services/exchange-data.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit{
  
  user?:UserSerializer

  constructor(
    private service:UserService,
    private router:ActivatedRoute,
    private exchange_data:ExchangeDataService){}

  ngOnInit(): void {
    const id=this.router.snapshot.paramMap.get("id")
    if(id){
      this.service.getUserInfoFromID(Number.parseInt(id)).subscribe(data=>{
        this.user=data
        this.exchange_data.sendData(data.user)
      })
    }
  }
}
