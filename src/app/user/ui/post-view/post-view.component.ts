import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faArrowRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { catchError, concat, Observable, tap } from 'rxjs';
import { Commentary, Post, PostView } from 'src/app/Models/Model';
// import { UserService } from '../../services/post.service';
import { PostService } from 'src/app/user/services/post.service';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.css'],
    standalone: false
})
export class PostViewComponent implements OnInit{
  
  like=faThumbsUp
  send=faArrowRight
  like_bg_color="bg-white"

  commentaries$?:Observable<Commentary[]>
  commentaries?:Commentary[]

  @Input() Post?:PostView

  commentGroup=new FormGroup({
    comment:new FormControl('')
  })

  constructor(private service:PostService,private toaster:ToastrService){}

  ngOnInit(): void {
    if(this.Post?.isLiked!){
      this.like_bg_color="bg-blue-700"
    }
    else{
      this.like_bg_color="bg-white"
    }
    // this.commentaries$=this.service.getPostComent(this.Post?.id!)
    this.service.getPostComent(this.Post?.post.id!)
    .subscribe(data=>this.commentaries=data)
  }

  submitComment(event:Event){
    event.preventDefault()

    this.service.sendComment({
      content:this.commentGroup.value?.comment!
    },this.Post?.post.id!).pipe(
      catchError((error,res)=>{
        this.toaster.error(error.error,"Error")
        return []
      })
    ).subscribe(data=>this.commentaries?.push(data))

    this.commentGroup.reset()
  }

  likePost(){
    if(!this.Post?.isLiked!){
      this.service.like(this.Post?.post.id!).pipe(
        tap(like=>{
          this.Post!.isLiked=like.isLiked!
        })
      ).subscribe()
    }
  }
}
