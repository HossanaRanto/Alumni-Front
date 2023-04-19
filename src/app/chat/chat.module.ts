import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { OldchatComponent } from './ui/oldchat/oldchat.component';
import { OldchatlistComponent } from './ui/oldchatlist/oldchatlist.component';
import { ChatComponent } from './features/chat/chat.component';
import { MessageComponent } from './features/message/message.component';
import { MessageContentComponent } from './ui/message-content/message-content.component';
import { NoChatComponent } from './features/no-chat/no-chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../ui/ui.module';
// import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    ChatComponent,
    OldchatComponent,
    OldchatlistComponent,
    MessageComponent,
    MessageContentComponent,
    NoChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    UIModule
  ]
})
export class ChatModule { }
