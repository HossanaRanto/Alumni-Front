import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/Model';

@Component({
    selector: 'app-message-content',
    templateUrl: './message-content.component.html',
    styleUrls: ['./message-content.component.css'],
    standalone: false
})
export class MessageContentComponent implements OnInit{
  ngOnInit(): void {
    if(this.Message?.isSender){
      this.float_class="float-right"
      this.bg_class="bg-blue-600"
    }
    else{
      this.float_class="float-left"
      this.bg_class="bg-gray-600"
    }
  }

  bg_class:string="bg-blue-600"
  float_class:string="float-right"

  @Input() Message?:Message
}
