import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private afauth:AngularFireAuth) { }

  logout(){
    this.afauth.auth.signOut();
    window.location.reload();
  }
}
