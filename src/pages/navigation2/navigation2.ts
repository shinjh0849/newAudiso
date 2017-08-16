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
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { StyleCheck1Page } from '../style-check1/style-check1';

@Component({
  selector: 'page-navigation2',
  templateUrl: 'navigation2.html',
  animations: [
    trigger('flyin', [
      state('out', style({
        left: '-260px'
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
export class Navigation2Page {
  flyinState: string = "out";
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState)
    this.speak(`앞으로 10m만 직진 해주세요~!
                5m만 더 가면 되요~! 
                네 이제 왼쪽으로 방향으로 돌아주셔서 10m만 전진해주세요~!`);
  }

  onDoubleTap() {
    this.flyinState = 'down';
    this.speak(`피팅룸에 도착하셨어요! 피팅을 하시고 스타일체크를 원하시면 언제든 다시 저를 불러서 
                유니야 스타일체크 할래’라고 말씀해주시거나 화면을 두번 탭해 주세요!`);
    this.navCtrl.push(StyleCheck1Page, {}, { animate: false });
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
