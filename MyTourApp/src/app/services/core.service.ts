import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserMinimalModel } from '../models/user-minimal'
import { map, switchMap } from 'rxjs/operators';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private afauth:AngularFireAuth, private db:AngularFirestore) {}

  getMinimalUser():Observable<UserMinimalModel>{
    return this.afauth.user.pipe(switchMap(d =>{
      return this.db.doc('Users/'+d.uid).get().pipe(map(data=>{
        return <UserMinimalModel>data.data();
      }))
    }))
  }
}
