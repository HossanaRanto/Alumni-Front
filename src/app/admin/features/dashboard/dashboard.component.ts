import { Component } from '@angular/core';
import { HeaderComponent } from '../../ui/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    imports: [HeaderComponent, RouterOutlet],
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true
})
export class DashboardComponent {

}
