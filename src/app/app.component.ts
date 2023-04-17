import { Component, OnInit } from '@angular/core';

import { FMopenClose } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FMopenClose],
})
export class AppComponent implements OnInit {
  title = 'VitesseVent_OS_3';
  FMisOpen = false;
  EEisOpen = true;
  ngOnInit() {
    setTimeout(() => {
      this.FMisOpen = true;
    }, 7000);
  }

  rightAnimDone(event: any) {
    if (event.fromState != 'void') {
      console.log(event.fromState);

      setTimeout(() => {
        this.FMisOpen = false;
        this.EEisOpen = false;
      }, 5000);
    }
  }
}
