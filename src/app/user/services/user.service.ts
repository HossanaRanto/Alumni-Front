import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point, University, User, UserSerializer } from 'src/app/Models/Model';
import { BASE_URL } from 'src/app/services/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  CheckUsername(username:string){
    return this.http.get<{message:string,valid:string}>(BASE_URL+"user/checkmyusername/"+username)
  }
  CheckEmail(email:string){
    return this.http.get<{message:string,valid:string}>(BASE_URL+"user/checkmyemail/"+email)
  }
  getUserInfo(){
    return this.http.get<UserSerializer>(BASE_URL+"user")
  }
  getUserInfoFromID(user:number){
    return this.http.get<UserSerializer>(BASE_URL+"user/"+user)
  }
  updateProfil(data:any,changePassword:boolean){
    return this.http.post<User>(BASE_URL+"user/update?updatepassword="+changePassword,data)
  }
  updatePicture(file:any,type:string){
    return this.http.post(BASE_URL+"user/uploadimage/"+type,file)
  }
  academicCareers(){
    return this.http.get<{university:University}[]>(BASE_URL+"university/academic_career")
  }
  academicCareersFromId(user:number){
    return this.http.get<{university:University}[]>(BASE_URL+"university/academic_career/"+user)
  }
  getPictures(offset:number,limit:number){
    return this.http.get<{pictures:string[]}>(BASE_URL+"user/pictures"+"?offset="+offset+"&limit="+limit)
  }
  getPicturesFromId(user:number,offset:number,limit:number){
    return this.http.get<{pictures:string[]}>(BASE_URL+"user/pictures/"+user+"?offset="+offset+"&limit="+limit)
  }
  getPoint(){
    return this.http.get<Point>(BASE_URL+"point")
  }
}
