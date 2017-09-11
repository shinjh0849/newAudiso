import {
  Component,
  trigger,
  transition,
  style,
  animate,
  group,
  state
} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StyleCheck2Page } from '../style-check2/style-check2';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-style-check1',
  templateUrl: 'style-check1.html',
  animations: [
    trigger('flyin', [
      state('out', style({
        left: '-300px'
      })),
      state('in', style({
        left: '32px'
      })),
      state('down', style({
        opacity: '0'
      })),
      transition('out=>in', [
        animate('0.5s 1.5s cubic-bezier(.67,1.28,.64,1.35)')
      ]),
      transition('in=>down', [
        animate('0.7s cubic-bezier(.67,1.28,.64,1.35)')
      ])
    ])
  ]
})
export class StyleCheck1Page {
  flyinState: string = "out";
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleCheck1Page');
    this.speak(`스타일체크를 시작해볼게요. 먼저 음성안내를 받아, 스타일체크 블록 장판으로 이동해 주세요!`);
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
  }

  nextP() {
    this.navCtrl.push(StyleCheck2Page, {}, { animate: false });
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
