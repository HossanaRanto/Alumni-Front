import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentary, Post, PostView } from 'src/app/Models/Model';
import { BASE_URL } from 'src/app/services/api';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getRandomPost(offset:number,limit:number){
    let url=BASE_URL+"post/random"+"?offset="+offset+"&limit="+limit
    return this.http.get<PostView[]>(url)
  }
  getPostComent(post_id:number){
    return this.http.get<Commentary[]>(BASE_URL+"post/commentaries/"+post_id)
  }
  sendComment(data:{content:string},post_id:number){
    return this.http.post<Commentary>(BASE_URL+"post/comment/"+post_id,data)
  }
  like(post_id:number){
    return this.http.post<{isLiked:boolean}>(BASE_URL+"post/like/"+post_id,null)
  }
  createPost(data:{content:string}){
    return this.http.post<Post>(BASE_URL+"post",data)
  }
  updatePostPhoto(post_id:number,data:any){
    return this.http.post<Post>(BASE_URL+"post/update_photo/"+post_id,data)
  }
}
