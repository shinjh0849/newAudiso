import { TextToSpeech } from '@ionic-native/text-to-speech';
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
import { StyleCheck3Page } from '../style-check3/style-check3';

@Component({
  selector: 'page-style-check2',
  templateUrl: 'style-check2.html',
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
export class StyleCheck2Page {
  flyinState: string = "out";
  constructor(public navCtrl: NavController, public tts: TextToSpeech, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleCheck2Page');

    this.speak('5')
    setTimeout(() => {
      this.speak('4')
    }, 1000);
    setTimeout(() => {
      this.speak('3')
    }, 2000);
    setTimeout(() => {
      this.speak('2')
    }, 3000);
    setTimeout(() => {
      this.speak('1')
    }, 4000);
    setTimeout(() => {
      this.speak(`2017년 유니클로 코디 전문가 MD 데이터를 통해 엄선된 유니클로만의 스타일체크가 완료되었습니다!
    피드백을 들으시려면 탭 두번 눌러주세요. `);
    }, 8000);

    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
  }

  nextP() {

      this.navCtrl.push(StyleCheck3Page, {}, { animate: false });
 
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
