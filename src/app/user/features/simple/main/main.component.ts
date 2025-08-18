import { Component } from '@angular/core';
import { ExchangeDataService } from 'src/app/user/services/exchange-data.service';

import { HeaderComponent } from 'src/app/user/ui/header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet]
})
export class MainComponent {
  constructor(private exchange: ExchangeDataService) {}

  onScroll(event: Event) {
    this.exchange.setScroll(event);
  }
}
