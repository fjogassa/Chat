import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../module/user';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  auth: AngularFireAuth;

  constructor(private angularFireAuth: AngularFireAuth) {    
    this.user = angularFireAuth.authState;
    this.auth = angularFireAuth;

    console.log("constructor AuthService");
  }

  createUser(user: User): firebase.Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User): firebase.Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut(): firebase.Promise<any> {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  getCurrentUser() {
    return this.angularFireAuth.auth.currentUser;
  }
}
