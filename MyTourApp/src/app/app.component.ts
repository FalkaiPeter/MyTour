import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;
  constructor(swu: SwUpdate, private router: Router) {
    swu.available.subscribe(() => {swu.activateUpdate().then(() => window.location.reload()); });
    router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  checkRouterEvent(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }

    if (event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
