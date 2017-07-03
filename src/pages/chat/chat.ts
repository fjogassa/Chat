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


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, public authService: AuthService) {
    console.log(authService.getCurrentUser.name);
    
    this.lista=af.list("https://chat-ionic-a0a18.firebaseio.com/chat")
    
  }

  enviarMsg() {
    let msg = {
      texto: this.mensagem,
      data: new Date()
    };
    
    this.lista.push(msg).then(()=> {
      this.mensagem = "";
      }
    )
  }

  logoff() {
    
  }

}
