import { Component, Input } from '@angular/core';
import { UserSerializer } from 'src/app/Models/Model';

@Component({
  selector: 'app-university-student',
  templateUrl: './university-student.component.html',
  styleUrls: ['./university-student.component.css'],
  standalone: true
})
export class UniversityStudentComponent {
  @Input() Student?:UserSerializer
}
