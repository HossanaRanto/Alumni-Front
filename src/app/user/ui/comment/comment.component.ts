import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Commentary } from 'src/app/Models/Model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class CommentComponent {
  @Input() Comment?:Commentary
}
