import { Component, Input } from '@angular/core';
import { LastMessage } from 'src/app/Models/Model';

@Component({
    selector: 'app-oldchat',
    templateUrl: './oldchat.component.html',
    styleUrls: ['./oldchat.component.css'],
    standalone: false
})
export class OldchatComponent {

  @Input() OldMessage?:LastMessage;
}
