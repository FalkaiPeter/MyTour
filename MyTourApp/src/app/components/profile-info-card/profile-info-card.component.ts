import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { UserFullModel } from 'src/app/models/user-full';
import { ProfileService } from 'src/app/services/profile.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { NavMainComponent } from '../nav/nav-main/nav-main.component';

@Component({
  selector: 'app-profile-info-card',
  templateUrl: './profile-info-card.component.html',
  styleUrls: ['./profile-info-card.component.scss']
})
export class ProfileInfoCardComponent implements OnInit{
  @Input() user$: Observable<UserFullModel>;
  @Input() cuser$: Observable<UserFullModel>;
  @Input() userID$: Observable<string>;
  profileRelation$: Observable<string>;

  constructor(private profileService: ProfileService, private userService: UserService) {

  }

  ngOnInit() {
    this.profileRelation$ = this.profileService.getProfileRelation(this.user$, this.cuser$);
  }


  follow() {
    const a = this.cuser$.pipe(switchMap(cuser => {
      return this.user$.pipe(map(user => {
        return this.profileService.follow(user.id, cuser.id);
      }));
    })).pipe(map(()=> this.profileRelation$ = of('followed'))).subscribe(() =>  a.unsubscribe());
  }

  unfollow() {
    const a = this.cuser$.pipe(switchMap(cuser => {
      return this.user$.pipe(map(user => {
        return this.profileService.unfollow(user.id, cuser.id);
      }));
    })).pipe(map(()=> this.profileRelation$ = of('!followed'))).subscribe(() => a.unsubscribe());
  }
}
