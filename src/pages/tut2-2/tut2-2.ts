import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_1Page } from "../tut2-1/tut2-1";
import { Tut2_4Page } from "../tut2-4/tut2-4";

@Component({
  selector: 'page-tut2-2',
  templateUrl: 'tut2-2.html',

  animations: [
    trigger('text2', [
      state('off', style({ left: '-1000px' })),
      state('on', style({ left: '102.792px' })),
      state('d', style({ opacity: 0 })),
      transition('off=>on', [animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]),
      transition('on=>d', [animate('100ms')])
    ]),
    trigger('nav2', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ])
  ]
})
export class Tut2_2Page {
  nav2State: string = "off";
  text2State1: string = "off";
  text2State: string = "off";
  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  
    this.triggered = false;
    this.position = this.defaultX;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_2Page');

      this.text2State = "on";
      this.text2State1 = "on";
      this.nav2State = "on";

      this.hamsoo(`오디쏘는 직원도 부를 수 있답니다. 유니야를 부르시고 직원을 한 번 불러보시겠어요? (띠링)
                    다음으로 넘어가시려면 탭 한 번 
                    다시 들으시려면 더블탭을 해주세요!
                  `)

  }

  doubleTapEvent() {
    this.hamsoo(`
    매장에서 쇼핑 중 확인하신 의류들의 히스토리는 자동으로 저장되어 쇼핑 중 QR코드, 스타일체크, 위시리스트에 담은 상품들을 확인하실 수 있어요!
    다음으로 넘어가시려면 탭 한 번 이전으로 돌아가려면 왼쪽으로 스와이핑 해주세요.
                  `)
    //this.navCtrl.push(Tut2_1Page, {}, {animate: false});

    console.log(this.navCtrl);
  }

  clickEvent() {
    this.navCtrl.push(Tut2_4Page, {}, {animate: false});
  }


  async hamsoo(talkThis): Promise<any> {
    try {
      await this.tts.speak({
        text: talkThis, // 
        locale: 'ko-KR',
        rate: 1
      })
      console.log(talkThis)
    }
    catch (e) {
    }
  }

    // 이전으로 돌아가려면 왼쪽으로 스와이핑 해주세요.
    panEvent(e) {
      
          if (e.deltaX <= -140 && !this.triggered) {
            this.triggered = true;
            this.position = 66.5;
            //event 실행
            this.navCtrl.push(Tut2_1Page, {}, { animate: false });
          }
          else if (this.position > 66.5) {
            this.position = this.defaultX + e.deltaX;
            if (e.isFinal == true) {
              this.position = this.defaultX;
              this.triggered = false;
            }
          }
        }
}
