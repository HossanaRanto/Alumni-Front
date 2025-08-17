import { Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { MessageComponent } from './features/message/message.component';
import { NoChatComponent } from './features/no-chat/no-chat.component';

export const CHAT_ROUTES: Routes = [
  { path: '', component: ChatComponent, children: [
    { path: '', component: NoChatComponent },
    { path: ':id', component: MessageComponent }
  ] }
];
