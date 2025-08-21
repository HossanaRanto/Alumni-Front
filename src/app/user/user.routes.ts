import { Routes } from '@angular/router';
import { MainComponent } from './features/simple/main/main.component';
import { ProfilComponent } from './features/student/profil/profil.component';
import { ProfilPersInfoComponent } from './ui/profil-pers-info/profil-pers-info.component';
import { AcadmicCareerComponent } from './ui/acadmic-career/acadmic-career.component';
import { ProfilMediaComponent } from './ui/profil-media/profil-media.component';
import { ProfilUserComponent } from './features/simple/profil-user/profil-user.component';
import { ProfilPersInfoUserComponent } from './ui/profil-pers-info-user/profil-pers-info-user.component';
import { AcademicCareerUserComponent } from './ui/academic-career-user/academic-career-user.component';
import { ProfilMediaUserComponent } from './ui/profil-media-user/profil-media-user.component';
import { PointComponent } from './features/alumni/point/point.component';
import { ListPostComponent } from './features/student/list-post/list-post.component';
import { PostComponent } from './features/alumni/post/post.component';
import { CreateUniversityComponent } from './features/simple/create-university/create-university.component';
import { UniversityComponent } from './features/university/university.component';
import { UniversityDetailComponent } from './ui/university-detail/university-detail.component';
import { UniversityStudentsComponent } from './ui/university-students/university-students.component';
import { MessageComponent } from '../chat/features/message/message.component';
import { ChatComponent } from '../chat/features/chat/chat.component';

export const USER_ROUTES: Routes = [
  { path: 'chat', component: ChatComponent, children: [
    { path: ':id', component: MessageComponent }
  ] },
  { path: 'profil', component: ProfilComponent, children: [
    { path: '', redirectTo: 'personnalinfo', pathMatch: 'full' },
    { path: 'personnalinfo', component: ProfilPersInfoComponent },
    { path: 'academic_career', component: AcadmicCareerComponent },
    { path: 'media', component: ProfilMediaComponent }
  ] },
  { path: 'user/:id', component: ProfilUserComponent, children: [
    { path: '', redirectTo: 'personnalinfo', pathMatch: 'full' },
    { path: 'personnalinfo', component: ProfilPersInfoUserComponent },
    { path: 'academic_career', component: AcademicCareerUserComponent },
    { path: 'media', component: ProfilMediaUserComponent }
  ] },
  { path: 'point', component: PointComponent },
  { path: 'home', component: ListPostComponent },
  { path: 'post', component: PostComponent },
  { path: 'university-create', component: CreateUniversityComponent },
  { path: 'university', component: UniversityComponent, children: [
    { path: ':id', component: UniversityDetailComponent, children: [
      { path: '', redirectTo: 'student', pathMatch: 'full' },
      { path: ':state', component: UniversityStudentsComponent }
    ] }
  ] }
];
