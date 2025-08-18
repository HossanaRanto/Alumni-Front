import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OldchatlistComponent } from '../../ui/oldchatlist/oldchatlist.component';

@Component({
    imports: [RouterOutlet, OldchatlistComponent],
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    standalone: true
})
export class ChatComponent {

}
