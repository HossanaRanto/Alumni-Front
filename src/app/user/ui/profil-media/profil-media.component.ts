import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../../services/exchange-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profil-media',
  templateUrl: './profil-media.component.html',
  styleUrls: ['./profil-media.component.css']
})
export class ProfilMediaComponent implements OnInit{
  offset:number=0
  limit:number=2
  images:string[]=[]
  isloading:boolean=true
  hasRecord:boolean=true

  loader:boolean[]=[]

  constructor(
    private service:UserService,
    private exchange_service:ExchangeDataService){}
  ngOnInit(): void {
    this.getRecords()

    this.exchange_service.profilScroll.subscribe(event=>this.onscroll(event))
  }
  getRecords(){

    this.service.getPictures(this.offset,this.limit).subscribe(data=>{
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
