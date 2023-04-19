import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, Observable, of, switchMap, tap } from 'rxjs';
import { Message, MessageOffset, UserSerializer } from 'src/app/Models/Model';
import { UserService } from 'src/app/user/services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

  messages:Message[]=[]

  offset:number=0
  active_offset?:MessageOffset
  offset_users:MessageOffset[]=[]
  limit:number=15;
  user?:number
  currentuser?:UserSerializer
  isloading:boolean=true
  hasRecord:boolean=true

  @ViewChild('container') container!:ElementRef

  constructor(
    private route:ActivatedRoute,
    private service:ChatService,
    private auth:UserService,
    private router:Router){
  }
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.user=param["id"]

      const find_offset=this.offset_users.find(o=>o.user_id==this.user)

      if(!find_offset){
        this.offset_users.push({
          user_id:this.user!,
          value:0,
          messages:[],
          hasRecord:true,
          messagenotSent:""
        })
      }


      this.auth.getUserInfoFromID(this.user!).subscribe(data=>{
        this.currentuser=data
      })
      this.loadMessage()

      // console.log(this.active_offset?.messagenotSent)
      this.active_offset && (this.message.value.Content=this.active_offset.messagenotSent)
    })

    this.message.valueChanges.subscribe(value=>{
      this.active_offset && (this.active_offset.messagenotSent=value.Content!)
    })
  }

  test_message:Message={message:"my message send by Ranto",isSender:true,dateSend:""}
  test_message2:Message={message:"my message send by Ranto",isSender:false,dateSend:""}

  message=new FormGroup({
    Content:new FormControl('',[Validators.minLength(1)])
  })

  loadMessage(){
    var offset_user=this.offset_users.find(o=>o.user_id==this.user)
    this.active_offset=offset_user
    this.service.getMessages(this.user!,offset_user?.value!,this.limit)
      .pipe(tap(msg=>{
        // this.copyArray(this.messages!,msg)
        if(msg.length>0){
          offset_user?.messages.push(...msg)
          offset_user && (offset_user.value +=this.limit)
        }
        else{
          // this.hasRecord=false
          offset_user && (offset_user.hasRecord=false)
        }
        this.isloading=false
      })).subscribe()
  }
  // copyArray(source:Message[],source2:Message[]){
  //   source2.forEach(message=>{
  //     source.push(message)
  //   })
  // }
  submitMessage(event:Event){
    event.preventDefault()

    if(this.message.valid){
      this.service.sendMessage({
        To:this.user!,
        Content:this.message.value?.Content!
      }).pipe(
        tap(msg=>{
          this.active_offset?.messages.push(msg)
          this.message.value.Content=""
        })
      ).subscribe()
    }
  }

  onScroll(event:Event){
    const element=this.container.nativeElement
    const attop=element.scrollTop === element.clientHeight - element.scrollHeight
    if(attop && !this.isloading && this.hasRecord){
      this.isloading=true
      this.loadMessage()
    }

  }
}
