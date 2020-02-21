import { Component } from '@angular/core';
import { UserMinimalModel } from 'src/app/models/user-minimal';
import { Observable } from 'rxjs';
import { LogoutService } from 'src/app/services/logout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent {
  drop = false;
  currentUser$: Observable<UserMinimalModel>;
  constructor(private userService: UserService, public logoutService: LogoutService) {
    this.currentUser$ = this.userService.getUser();
  }

}

