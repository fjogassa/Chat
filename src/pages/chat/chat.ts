import { SigninPage } from './../signin/signin';
import { AuthService } from './../../service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public af: AngularFireDatabase, private authService: AuthService) {
    
    console.log("constructor ChatPage");
    this.lista = af.list("https://chat-ionic-a0a18.firebaseio.com/chat");
  }

  enviarMsg() {
    let msg = {
      texto: this.mensagem,
      data: new Date().toISOString(),
      username: this.authService.getCurrentUser().email
    };
    
    this.lista.push(msg).then(()=> {
      this.mensagem = "";
      }
    )
  }

  logoff() {
    this.authService.signOut();
    this.navCtrl.setRoot(SigninPage);
  }

}
