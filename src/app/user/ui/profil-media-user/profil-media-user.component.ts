import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExchangeDataService } from '../../services/exchange-data.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-profil-media-user',
    templateUrl: './profil-media-user.component.html',
    styleUrls: ['./profil-media-user.component.css'],
    standalone: false
})
export class ProfilMediaUserComponent implements OnInit {

  offset:number=0
  limit:number=2
  images:string[]=[]
  isloading:boolean=true
  hasRecord:boolean=true
  user_id:number=0
  loader:boolean[]=[]

  constructor(
    private exchange_service:ExchangeDataService,
    private router:ActivatedRoute,
    private service:UserService){}
  ngOnInit(): void {

    this.exchange_service.profilScroll.subscribe(event=>this.onscroll(event))
    this.router.parent?.params.subscribe(param=>{
      this.user_id=param["id"]
      this.getRecords()
    })
  }
  getRecords(){

    this.service.getPicturesFromId(
      this.user_id,
      this.offset,
      this.limit).subscribe(data=>{
      if(data.pictures.length>0){
        this.offset+=this.limit
        this.images.push(...data.pictures)
        this.loader.push(...this.images.map(i=>true))
      }
      else{
        this.hasRecord=false
      }
      this.isloading=false
    })
  }
  onscroll(event:Event|any){
    const element=event.target
    const atBottom=element.scrollHeight-element.scrollTop===element.clientHeight

    if(atBottom && !this.isloading && this.hasRecord){
      this.isloading=true
      this.getRecords()
    }
  }
  onload(index:number){
    this.loader[index]=false
  }
}
