import { Component } from '@angular/core';
import { ExchangeDataService } from 'src/app/user/services/exchange-data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: false
})
export class MainComponent {
  constructor(private exchange:ExchangeDataService){}

  onScroll(event:Event){
    this.exchange.setScroll(event)
  }
}
