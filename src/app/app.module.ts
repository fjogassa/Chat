import { AuthService } from './../service/auth-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from '../pages/chat/chat';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = {
  
  // Initialize Firebase
    apiKey: "AIzaSyD-GbMrKwYQWOFOMdwbmZLiwue9JpsCLt4",
    authDomain: "chat-ionic-a0a18.firebaseapp.com",
    databaseURL: "https://chat-ionic-a0a18.firebaseio.com",
    projectId: "chat-ionic-a0a18",
    storageBucket: "chat-ionic-a0a18.appspot.com",
    messagingSenderId: "917140940602"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    SigninPage,
    SignupPage,
    ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    SigninPage,
    SignupPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
  ]
})
export class AppModule { }
