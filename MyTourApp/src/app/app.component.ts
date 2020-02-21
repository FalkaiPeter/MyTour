import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(swu: SwUpdate) {
    swu.available.subscribe(() => {
      swu.activateUpdate().then(() => window.location.reload());
    });
  }
}
