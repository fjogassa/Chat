import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChatPage } from '../pages/chat/chat';
import { SigninPage } from '../pages/signin/signin';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    afAuth: AngularFireAuth) {

    console.log("constructor MyApp");

    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        console.log("Logou");
        this.rootPage = ChatPage;
        authObserver.unsubscribe();
      } else {
        console.log("Não Logou");
        this.rootPage = SigninPage;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

