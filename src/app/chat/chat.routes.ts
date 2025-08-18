import { Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { MessageComponent } from './features/message/message.component';

export const CHAT_ROUTES: Routes = [
  { path: '', component: ChatComponent, children: [
    { path: ':id', component: MessageComponent }
  ] }
];
