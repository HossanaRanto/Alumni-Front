import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './features/student/list-post/list-post.component';
import { ProfilComponent } from './features/student/profil/profil.component';
import { UpdateProfilComponent } from './features/alumni/update-profil/update-profil.component';
import { PostComponent } from './features/alumni/post/post.component';
// import { ChatComponent } from './features/simple/chat/chat.component';
import { ActivityComponent } from './features/simple/activity/activity.component';
import { UserRoutingModule } from './user-routing.module';
import { PostViewComponent } from './ui/post-view/post-view.component';
import { CommentComponent } from './ui/comment/comment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { UniversityDetailsComponent } from './ui/university-details/university-details.component';
import { UniversityComponent } from './features/university/university.component';
import { UniversityListComponent } from './ui/university-list/university-list.component';
import { UniversityItemComponent } from './ui/university-item/university-item.component';
import { UniversityDetailComponent } from './ui/university-detail/university-detail.component';
import { UniversityStudentsComponent } from './ui/university-students/university-students.component';
import { UniversityStudentComponent } from './ui/university-student/university-student.component';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './features/simple/main/main.component';
import { UIModule } from '../ui/ui.module';
import { SpinnerComponent } from '../ui/spinner/spinner.component';
import { ProfilPersInfoComponent } from './ui/profil-pers-info/profil-pers-info.component';
import { AcadmicCareerComponent } from './ui/acadmic-career/acadmic-career.component';
import { ProfilMediaComponent } from './ui/profil-media/profil-media.component';
import { ProfilUserComponent } from './features/simple/profil-user/profil-user.component';
import { ProfilPersInfoUserComponent } from './ui/profil-pers-info-user/profil-pers-info-user.component';
import { ProfilMediaUserComponent } from './ui/profil-media-user/profil-media-user.component';
import { AcademicCareerUserComponent } from './ui/academic-career-user/academic-career-user.component';
import { PointComponent } from './features/alumni/point/point.component';
import { CreateUniversityComponent } from './features/simple/create-university/create-university.component';



@NgModule({
  declarations: [
    ListPostComponent,
    ProfilComponent,
    UpdateProfilComponent,
    PostComponent,
    ActivityComponent,
    PostViewComponent,
    CommentComponent,
    UniversityDetailsComponent,
    UniversityComponent,
    UniversityListComponent,
    UniversityItemComponent,
    UniversityDetailComponent,
    UniversityStudentsComponent,
    UniversityStudentComponent,
    HeaderComponent,
    MainComponent,
    ProfilPersInfoComponent,
    AcadmicCareerComponent,
    ProfilMediaComponent,
    ProfilUserComponent,
    ProfilPersInfoUserComponent,
    ProfilMediaUserComponent,
    AcademicCareerUserComponent,
    PointComponent,
    CreateUniversityComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    UIModule
  ]
})
export class UserModule { }
