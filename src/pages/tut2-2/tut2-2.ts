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
      state('off', style({ left: '-740px' })),
      state('on', style({ left: '32.4262px' })),
      state('d', style({ opacity: 0 })),
      transition('off=>on', [animate('700ms 150ms cubic-bezier(.46,.01,.13,1.06)')]),
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
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
    this.hamsoo(`오디쏘는 직원도 부를 수 있답니다. 유니야를 부르시고 직원을 한 번 불러보시겠어요? (띠링)
                    다음으로 넘어가시려면 탭 한 번 
                    다시 들으시려면 더블탭을 해주세요!
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

}
