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
import { ScanPage } from '../scan/scan';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
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
    ]),
    trigger('bounce', [
      state('up', style({
        top: '393px'
      })),
      state('down', style({
        top: '363px'
      })),
      transition('up=>down', [
        animate('0.7s')
      ])
    ])
  ]
})
export class NavigationPage {
  flyinState: string = "out";
  bounce: string = 'up';


  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage kikiasa');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
    this.bounce = 'down';

    this.speak('앞으로 25m만 직진 해주세요~! 5m만 더 가면 되요~! 네 이제 왼쪽으로 방향으로 돌아주셔서 3m만 전진해주세요~!');
  }

  onDoubleTap() {
    this.flyinState = 'down';
    this.speak('울트라스트레치진 A 매대 앞에 도착했어요! 이 매대는 3단으로 되어 있고 4가지 색상의 울트라스트레치진 A가 22inch부터 28inch까지 있어요~! 찾으시는 navy, 27인치는 2번째 단 왼쪽에 위치해 있어요~!')
    this.navCtrl.push(ScanPage, {}, { animate: false });
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

    }
  }
}
