import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ListRequestComponent } from './features/list-request/list-request.component';
import { ListStudentComponent } from './features/list-student/list-student.component';
import { ListComponent } from './ui/list/list.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'request', component: ListRequestComponent },
    { path: 'list', component: ListStudentComponent, children: [
      { path: '', redirectTo: 'student', pathMatch: 'full' },
      { path: ':state', component: ListComponent }
    ] }
  ] }
];
