import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointComponent } from './features/alumni/point/point.component';
import { PostComponent } from './features/alumni/post/post.component';
import { CreateUniversityComponent } from './features/simple/create-university/create-university.component';
import { MainComponent } from './features/simple/main/main.component';
import { ProfilUserComponent } from './features/simple/profil-user/profil-user.component';
// import { ChatComponent } from './features/simple/chat/chat.component';
import { ListPostComponent } from './features/student/list-post/list-post.component';
import { ProfilComponent } from './features/student/profil/profil.component';
import { UniversityComponent } from './features/university/university.component';
import { AcademicCareerUserComponent } from './ui/academic-career-user/academic-career-user.component';
import { AcadmicCareerComponent } from './ui/acadmic-career/acadmic-career.component';
import { ProfilMediaUserComponent } from './ui/profil-media-user/profil-media-user.component';
import { ProfilMediaComponent } from './ui/profil-media/profil-media.component';
import { ProfilPersInfoUserComponent } from './ui/profil-pers-info-user/profil-pers-info-user.component';
import { ProfilPersInfoComponent } from './ui/profil-pers-info/profil-pers-info.component';
import { UniversityDetailComponent } from './ui/university-detail/university-detail.component';
import { UniversityStudentsComponent } from './ui/university-students/university-students.component';

const routes:Routes=[
  {path:"",component:MainComponent,children:[
    {path:"chat",loadChildren:()=>import('../chat/chat.module').then(c=>c.ChatModule)},
    {path:"profil",component:ProfilComponent,children:[
      {path:"",redirectTo:"personnalinfo",pathMatch:'full'},
      {path:"personnalinfo",component:ProfilPersInfoComponent},
      {path:"academic_career",component:AcadmicCareerComponent},
      {path:"media",component:ProfilMediaComponent}
    ]},
    {path:"user/:id",component:ProfilUserComponent,children:[
      {path:"",redirectTo:"personnalinfo",pathMatch:'full'},
      {path:"personnalinfo",component:ProfilPersInfoUserComponent},
      {path:"academic_career",component:AcademicCareerUserComponent},
      {path:"media",component:ProfilMediaUserComponent}
    ]},
    {path:"point",component:PointComponent},
    {path:"home",component:ListPostComponent},
    {path:"post",component:PostComponent},
    {path:"university-create",component:CreateUniversityComponent},
    {path:"university",component:UniversityComponent,children:[
      {path:":id",component:UniversityDetailComponent,children:[
        {path:"",redirectTo:"student",pathMatch:'full'},
        {path:":state",component:UniversityStudentsComponent}
      ]}
    ]}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UserRoutingModule { }