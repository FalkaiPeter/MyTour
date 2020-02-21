import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserFullModel } from '../models/user-full';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afauth: AngularFireAuth, private db: AngularFirestore) {

  }

  getUser(id?: string | Observable<string>): Observable<UserFullModel> {
    if (id instanceof String) {
      return this.db.doc('Users/' + id).get().pipe(map(data => data.data() as UserFullModel));
    }
    if (id instanceof Observable) {
      return id.pipe(switchMap(id => {
        return this.db.doc('Users/' + id).get().pipe(map(data => data.data() as UserFullModel));
      }));
    }
    return this.afauth.user.pipe(switchMap(d => {
      return this.db.doc('Users/' + d.uid).get().pipe(map(data => {
        return data.data() as UserFullModel;
      }));
    }));
  }

}
