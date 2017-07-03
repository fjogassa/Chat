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
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  getCurrentUser() {
    return this.auth.auth.currentUser;
  }
}
