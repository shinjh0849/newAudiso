import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FittingRoomPage } from '../fitting-room/fitting-room';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-q-rcode',
  templateUrl: 'q-rcode.html',
})
export class QRcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
    this.speak(`찾으시던 블랙, 26inch 울트라스트레치진이 맞아요!
                피팅룸에 가져가서 피팅 후 스타일체크를 해보세요.`)
  }

  nextP() {

    this.navCtrl.push(FittingRoomPage, {}, { animate: false });
  }


  async speak(line): Promise<any> {
    try {
      await this.tts.speak({
        text: line,
        locale: 'ko-KR',
        rate: 1
      });
      console.log('speak function start!');
    }
    catch (e) {
      console.log(e);
    }
  }
}
