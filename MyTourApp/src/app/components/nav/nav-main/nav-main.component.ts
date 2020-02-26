import { Component } from '@angular/core';
import { LogoutService } from 'src/app/services/logout/logout.service';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/IUser';



@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent {
  drop = false;
  currentUser$: Observable<IUser> = this.userService.currentUser$;
  constructor(public logoutService: LogoutService, private userService: UserService) {
  }


}

