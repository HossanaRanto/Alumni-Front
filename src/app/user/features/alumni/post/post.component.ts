import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCameraAlt, faClose, faSave } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { catchError, switchMap } from 'rxjs';
import { PostService } from 'src/app/user/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  faCam=faCameraAlt
  close=faClose
  save=faSave
  
  @Output() Close=new EventEmitter<boolean>()

  @ViewChild("input") input?:ElementRef

  content_group=new FormGroup({
    content:new FormControl('',[Validators.minLength(0)])
  })

  imageUrl:string|ArrayBuffer|null="assets/test.jpg"

  constructor(private service:PostService,private toastr:ToastrService){

  }

  changeImage(event:any){

    const reader=new FileReader()
    reader.onload=(e)=>{
      this.imageUrl=e.target?.result!
    }

    reader.readAsDataURL(event.target.files[0])
  }

  closeCreate(){
    this.Close.emit(true)
  }

  sendPost(event:Event){
    event.preventDefault()

    const file_data=new FormData()
    file_data.append("file",this.input?.nativeElement.files[0])

    this.service.createPost({content:this.content_group.value.content!})
    .pipe(
      catchError((error,res)=>{
        this.toastr.error(error)
        return []
      }),
      switchMap(post=>{
        return this.service.updatePostPhoto(post.id,file_data)
      })
    ).subscribe(data=>{
      this.closeCreate()
    })
    
  }
}
