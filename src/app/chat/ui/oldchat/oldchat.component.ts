import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LastMessage } from 'src/app/Models/Model';

@Component({
  selector: 'app-oldchat',
  templateUrl: './oldchat.component.html',
  styleUrls: ['./oldchat.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class OldchatComponent {

  @Input() OldMessage?:LastMessage;
}
