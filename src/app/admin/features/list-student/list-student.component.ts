import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterLink, RouterOutlet],
    selector: 'app-list-student',
    templateUrl: './list-student.component.html',
    styleUrls: ['./list-student.component.css'],
    standalone: true
})
export class ListStudentComponent {

}
