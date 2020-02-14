import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isWelcomePage$:Observable<boolean>;

  constructor(swu: SwUpdate, private router: Router){
    swu.available.subscribe(event =>{
      swu.activateUpdate().then(() => window.location.reload());
    })

    this.isWelcomePage$ = of(this.router.isActive('/welcome', false)).pipe(map( d => {console.log(!d, this.router.url); return !d}));
    console.log(this.router.routerState.snapshot.url)
  }
}
