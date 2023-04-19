import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ListRequestComponent } from './features/list-request/list-request.component';
import { ListStudentComponent } from './features/list-student/list-student.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RequestComponent } from './ui/request/request.component';
import { StudentComponent } from './ui/student/student.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './ui/list/list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    ListRequestComponent,
    ListStudentComponent,
    RequestComponent,
    StudentComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FontAwesomeModule
  ],
  exports:[DashboardComponent]
})
export class AdminModule { 
  
}
