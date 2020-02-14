import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { UserMinimalModel } from 'src/app/models/user-minimal';
import { Observable, of } from 'rxjs';
import { RegisterLoginService } from 'src/app/services/register-login.service';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent {
  drop:boolean = false;
  user$:Observable<UserMinimalModel>;
  constructor(private core:CoreService, logoutService: LogoutService) {
    this.user$ = this.core.getMinimalUser();
  }

}

