import { Injectable, ErrorHandler } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IUser } from '../../models/IUser';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser$: Observable<IUser> = this.afauth.user.pipe(switchMap(af => {
    return this.getUserData(af.uid);
  }));

  user$: Observable<IUser>;
  constructor(private afauth: AngularFireAuth, private db: AngularFirestore) {
  }

  getUserData(id: string): Observable<IUser> {
    return this.db.doc('Users/' + id).get().pipe(map(data => data.data() as IUser));
  }

  getFollowRelation(id: string): Observable<boolean> {
    return this.currentUser$.pipe(switchMap(cu => {
      if (cu.id === id) {
        return of(null);
      }
      return this.db.doc('Users/' + cu.id + '/Following/' + id).get().pipe(switchMap(data => {
        if (data.exists) {
          return of(true);
        }
        return of(false);
      }));
    }));
  }









}
