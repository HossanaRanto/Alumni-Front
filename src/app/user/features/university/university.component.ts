import { Component, Input } from '@angular/core';
import { University } from 'src/app/Models/Model';
import { UniversityListComponent } from '../../ui/university-list/university-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-university',
    templateUrl: './university.component.html',
    styleUrls: ['./university.component.css'],
    standalone: true,
    imports: [UniversityListComponent, RouterOutlet]
})
export class UniversityComponent {}
