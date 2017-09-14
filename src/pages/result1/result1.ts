import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FittingRoomPage } from "../fitting-room/fitting-room";
import { TextToSpeech } from '@ionic-native/text-to-speech';
@Component({
  selector: 'page-result1',
  templateUrl: 'result1.html',
})
export class Result1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result1Page');
    this.speak(`찾으시던 진청, 26inch 울트라스트레치진 A가 맞아요! 피팅룸으로 이동하시려면 탭 두번 해주세요.`);
  }

  doubleTapEvent() {
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
