import { Component, Input } from '@angular/core';
import { Commentary } from 'src/app/Models/Model';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
    standalone: false
})
export class CommentComponent {
  @Input() Comment?:Commentary
}
