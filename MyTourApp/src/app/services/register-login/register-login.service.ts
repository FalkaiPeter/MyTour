import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {IUser} from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private db: AngularFirestore, private router: Router, private afauth: AngularFireAuth) { }

  login(data) {
    return this.afauth.auth.signInWithEmailAndPassword(data.email, data.password).then(sucess => {
      console.log('sucess');
      return this.router.navigateByUrl('');
    }, reject => {
      return false;
    });
  }
  signUp(data) {
    this.afauth.auth.createUserWithEmailAndPassword(data.email, data.password).then(sucess => {
      if (this.afauth.auth.currentUser.uid !== undefined) {
        const user: IUser = {
          id: this.afauth.auth.currentUser.uid,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          profilepicture: 'https://firebasestorage.googleapis.com/v0/b/mytour-b88ae.appspot.com/o/blank-profile-picture.svg?alt=media&token=42116535-60ea-433a-ae08-695dfb6cbb26',
          followers: 0,
          following: 0,
        };
        this.db.collection('Users/').doc(user.id).set(user);
        this.router.navigate(['']);
      }
    });

  }
}
