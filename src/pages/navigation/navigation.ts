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

    this.speak(`앞으로 10m만 직진 해주세요~!
     5m만 더 가면 되요~! 네 이제 왼쪽 방향으로 돌아주셔서 3m만 전진해주세요~!`);
  }

  onDoubleTap() {
    this.flyinState = 'down';
    this.speak('울트라스트레치진 A 진열대 앞에 도착했어요! ')
     setTimeout(()=> {
      this.navCtrl.push(ScanPage, {}, { animate: false });
    }, 5000);
    //this.navCtrl.push(ScanPage, {}, { animate: false });
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
