import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable, of } from 'rxjs';
import { UserFullModel } from 'src/app/models/user-full';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<UserFullModel>;
  userID$: Observable<string>;
  profileRelation$: Observable<string>;
  cuser$: Observable<UserFullModel>;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.route.paramMap.pipe(map(data => data.get('id'))));
    this.cuser$ = this.userService.getUser();
    this.userID$ = this.user$.pipe(switchMap(u => of(u.id)));
  }
}
