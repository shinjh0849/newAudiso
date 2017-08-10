import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_2Page } from "../tut2-2/tut2-2";

// @IonicPage()
@Component({
  selector: 'page-tut2-1',
  templateUrl: 'tut2-1.html',
  animations: [
    // 시작하는 원
    trigger('startCircle', [
      state('off', style({ left: '-800px' })),
      state('on', style({ left: '-360px' })),
      state('last', style({
        left: '740px',
        transform: 'scale(70)'
      })),
      transition('off=>on', [animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')]),
      transition('on=>last', [animate('500ms 800ms')])
    ]),
    trigger('startCircleS', [
      state('off', style({ left: '-800px' })),
      state('on', style({ left: '-372px' })),
      transition('off=>on', [animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')]
      ),
    ]),

    //텍스트들
    trigger('tutorial', [
      state('off', style({ left: '-300px' })),
      state('on', style({ left: '32.5px' })),
      state('d', style({ opacity: 0 })),
      transition('off=>on', [animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]),
      transition('on=>d', [animate('100ms')])
    ]),
    trigger('text1', [
      state('off', style({ left: '-1000px' })),
      state('on', style({ left: '32.5px' })),
      state('d', style({ opacity: 0 })),
      transition('off=>on', [ animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]),
      transition('on=>d', [ animate('100ms')])
    ]),
    trigger('text1_1', [
      state('off', style({
        left: '-1000px'
      })),
      state('on', style({
        left: '32.5px'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('on=>d', [
        animate('100ms')
      ]),

    ]),

    //네비게이터
    trigger('nav1', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms 1.5s')])
    ]),
  ]
})

export class Tut2_1Page {
  nav1State: string = "off";
  text1State: string = "off";
  tutorialState: string = "off";
  startState: string = "off";

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_1Page');

    this.hamsoo(`
    이제 모든 동작 사용법을 완료하셨어요. 짝짝. 
    그럼 이제 오디쏘 서비스의 간단한 이용방법을 알려드릴게요!
    당신을 위한 똑똑한 쇼핑친구 ’유니와 클로'를 이용해 보세요! 
    똑똑한 쇼핑친구 유니와 클로가 00님의 쇼핑을 도와드릴거에요.
    튜토리얼이 끝난 후, 언제든 ‘유니야'라고 불러주시면 질문을 하실 수 있고 
    음성 안내모드를 이용하시면 계속적으로 유니와 클로와 함께 쇼핑을 이어가실 수 있어요. 
    효과음이 들리면 화면 아무곳에 3초이상 터치하시거나, ‘유니야’를 불러주세요 (띠링)
`)



    // this.position = this.defaultX;

    this.startState = "on";
    this.tutorialState = "on";
    this.text1State = "on";
    this.nav1State = "on";

  }

  onLongPress(e) {
    this.text1State = "d";
    this.nav1State = "off";
    this.navCtrl.push(Tut2_2Page, {}, { animate: false });
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

