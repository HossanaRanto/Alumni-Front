import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestSerializer, UserSerializer } from 'src/app/Models/Model';
import { BASE_URL } from 'src/app/services/api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  listRequest(){
    return this.http.get<RequestSerializer[]>(BASE_URL+"university/requests")
  }
  acceptRequest(request_id:number){
    return this.http.post(BASE_URL+"university/join/accept/"+request_id,null)
  }
  rejectRequest(request_id:number){
    return this.http.post(BASE_URL+"university/join/reject/"+request_id,null)
  }
  listStudent(state:string){
    return this.http.get<UserSerializer[]>(BASE_URL+"university/student/"+state)
  }
  graduate(student:number){
    return this.http.post<{isGraduate:boolean}>(BASE_URL+"university/graduate/"+student,null)
  }
}
