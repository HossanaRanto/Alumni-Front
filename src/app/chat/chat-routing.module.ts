import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { MessageComponent } from './features/message/message.component';
import { NoChatComponent } from './features/no-chat/no-chat.component';
// import { ChatComponent } from './features/simple/chat/chat.component';
// import { ListPostComponent } from './features/student/list-post/list-post.component';
// import { ProfilComponent } from './features/student/profil/profil.component';

const routes:Routes=[
    {path:"",component:ChatComponent,children:[
      {path:"",component:NoChatComponent},
      {path:":id",component:MessageComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ChatRoutingModule { }