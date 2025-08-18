import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { University } from 'src/app/Models/Model';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class UniversityDetailsComponent {
  @Input() university?:{university:University}
}
