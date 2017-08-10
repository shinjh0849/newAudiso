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

import { Navigation2Page } from '../navigation2/navigation2';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-fitting-room',
  templateUrl: 'fitting-room.html',
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
export class FittingRoomPage {
  flyinState: string = "out";
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FittingRoomPage');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
    this.speak('그럼 제가 피팅룸으로 안내해드릴게요!');
  }

  nextP() {
    this.speak(`2블럭 앞에서 왼쪽으로 회전 후, 10m만 직진하시면 피팅룸이 있어요~! 그럼 가볼까요?`);
    this.navCtrl.push(Navigation2Page, {}, { animate: false });
  }

    async speak(line): Promise<any>{
    try{
      await this.tts.speak({
        text: line,
        locale: 'ko-KR',
        rate: 1
      });
      console.log('speak function start!');
    }
    catch(e){
      console.log(e);
    }
  }
}
