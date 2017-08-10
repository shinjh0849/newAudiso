import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { T2Page } from "../t2/t2";

@Component({
  selector: 'page-t1',
  templateUrl: 't1.html',
})
export class T1Page {

  constructor(private tts:TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {
  }
  async hamsoo(hungry): Promise <any> {
  try {
    await this.tts.speak({
      text: hungry,
      locale: 'ko-KR'})
    console.log("hi")
  } 
  catch(e) {
  }
 }

  ionViewDidLoad() {
         setTimeout(() => {
         this.navCtrl.push( T2Page, {}, {animate: false} ); 
        }, 1500);
    
  }

}
