import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Post, PostView } from 'src/app/Models/Model';
// import { UserService } from 'src/app/user/services/post.service';
import { PostService } from 'src/app/user/services/post.service';


@Component({
    selector: 'app-list-post',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.css'],
    standalone: false
})
export class ListPostComponent implements OnInit {
  faPlus=faPlus
  posts:PostView[]=[]
  offset:number=0
  limit:number=2
  isloading:boolean=true
  isCreatenewPost:boolean=false
  hasRecord:boolean=true


  @ViewChild("container") container?:ElementRef

  constructor(private service:PostService){}
  ngOnInit(): void {
    this.getRecords()
  }
  getRecords(){
    this.service.getRandomPost(this.offset,this.limit).subscribe(data=>{
      if(data.length>0){
        this.posts.push(...data)
        this.offset+=this.limit
      }
      else{
        this.hasRecord=false
      }
      this.isloading=false
    })
  }
  createPost(iscreate:boolean){
    this.isCreatenewPost=iscreate
  }

  infiniteScroll(event:Event){
    const element=this.container?.nativeElement!
    const atBottom=element.scrollHeight-element.scrollTop===element.clientHeight

    if(atBottom && !this.isloading && this.hasRecord){
      this.isloading=true
      this.getRecords()
    }
  }
}
