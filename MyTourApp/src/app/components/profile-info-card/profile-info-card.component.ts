import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-profile-info-card',
  templateUrl: './profile-info-card.component.html',
  styleUrls: ['./profile-info-card.component.scss']
})
export class ProfileInfoCardComponent implements OnInit{
  @Input() user$: Observable<IUser>;
  @Input() isFollowed$: Observable<boolean>;

  constructor() {
  }

  ngOnInit(): void {

  }

  follow(){

  }

  unfollow(){

  }
}
