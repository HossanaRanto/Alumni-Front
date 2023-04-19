import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point, University, UniversityPost, UniversityView, UserSerializer } from 'src/app/Models/Model';
import { BASE_URL } from 'src/app/services/api';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http:HttpClient) { }
  getUniversities(){
    return this.http.get<UniversityView[]>(BASE_URL+"university/list")
  }

  getUniversity(id:number){
    return this.http.get<UniversityView>(BASE_URL+"university/"+id)
  }
  getStudents(university:number,state:string){
    return this.http.get<UserSerializer[]>(BASE_URL+"university/student/"+university+"/"+state)
  }
  sendRequest(university:number){
    return this.http.post<any>(BASE_URL+"university/join/"+university,null)
  }
  createUniversity(data:any){
    return this.http.post<University>(BASE_URL+"university",data);
  }
  checkname(name:string){
    return this.http.get<{isExist:Boolean}>(BASE_URL+"university/checkname/"+name)
  }
  changeUniversityImage(file:any){
    return this.http.post<University>(BASE_URL+"university/updateimage",file)
  }
  
}
