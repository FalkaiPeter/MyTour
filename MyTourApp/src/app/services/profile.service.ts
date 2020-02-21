import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { UserFullModel } from '../models/user-full';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  increment = firebase.firestore.FieldValue.increment(1);
  decrement = firebase.firestore.FieldValue.increment(-1);
  constructor(private db: AngularFirestore) { }

  getProfileRelation(user: Observable<UserFullModel>, cuser: Observable<UserFullModel>): Observable<string> {
    return user.pipe(switchMap( user => {
      return cuser.pipe(switchMap( cuser => {
        if (cuser.id === user.id) {
          return of('self');
        }
        return this.db.doc('Followers&Followings/' + cuser.id + '/Followings/' + user.id).get().pipe(switchMap(data => {
          if (data.exists) {
            return of('followed');
          }
          return of('!followed');
        }));
      }));
    }));
  }


  follow(userID:string, cuserID:string){
    this.db.doc('Followers&Followings/' + userID + '/Followers/' + cuserID).set({id: cuserID});
    this.updateFollowerAndFollowingCount(userID,cuserID,true);
    return this.db.doc('Followers&Followings/' + cuserID + '/Followings/' + userID).set({id: userID}).then(sucess => true);

  }

  unfollow(userID:string, cuserID:string){
    this.db.doc('Followers&Followings/' + userID + '/Followers/' + cuserID).delete();
    this.updateFollowerAndFollowingCount(userID,cuserID,false);
    return this.db.doc('Followers&Followings/' + cuserID + '/Followings/' + userID).delete().then(sucess => true);
  }

  updateFollowerAndFollowingCount(uid: string, cid:string, isIncrement: boolean){
    this.db.doc('Users/' + uid).update({followers: firebase.firestore.FieldValue.increment(isIncrement ? 1 : -1)});
    this.db.doc('Users/' + cid).update({following: firebase.firestore.FieldValue.increment(isIncrement ? 1 : -1)});
  }
}

