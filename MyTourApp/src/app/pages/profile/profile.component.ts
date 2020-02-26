import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit, OnDestroy {
  user$: Observable<[IUser, boolean]>;
  isFollowed$: Observable<boolean>;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.user$ = this.route.data.pipe(map(data => data.userData));
   this.isFollowed$ = this.userService.getFollowRelation(this.route.snapshot.data.userData.id);
  }

  ngOnDestroy(): void {

  }
}
