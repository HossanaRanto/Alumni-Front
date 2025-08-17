import { Component, Input } from '@angular/core';
import { University } from 'src/app/Models/Model';

@Component({
    selector: 'app-university-details',
    templateUrl: './university-details.component.html',
    styleUrls: ['./university-details.component.css'],
    standalone: false
})
export class UniversityDetailsComponent {
  @Input() university?:{university:University}
}
