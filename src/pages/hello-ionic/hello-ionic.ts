import { Component } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  birthday: any = {
    name: '',
    message: ''
  };
  constructor(
    public loadingCtrl: LoadingController,
    public toast: ToastController
    ) {

  }

  sister() {
    this.birthday.name = "Portia";
    this.birthday.message = "It is obvious that you cannot stop having your birthdays and more precisely you can’t stop being my lovely sister. Both these things are really good. Wishing you a Happy Birthday."
  }
  brother() {
    this.birthday.name = "Thomas";
    this.birthday.message = "Having you as a brother topples every other sad thing that happened in my life because you never let me down, happy birthday to you, bro!"
  }
  family() {
    this.birthday.name = "To a Family";
    this.birthday.message = "My birthday wish for you all is that you continue to love life and never stop dreaming. May beauty and Happiness surround you, not only on you special day, but always."
  }

  sendMessage(){
    const loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000
    });
    loader.present();
    const pop = this.toast.create({
      message: 'message sent!!',
      position: 'top',
      duration: 3000,
      
    })
    pop.present();

  }
}
