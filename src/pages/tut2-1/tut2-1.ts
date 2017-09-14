import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_2Page } from "../tut2-2/tut2-2";
import { T5Page } from "../t5/t5";

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
      transition('off=>on', [animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')]), //원 나오는 이징
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
      transition('off=>on', [animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]), // 작은 글씨 이징: 1000ms
      transition('on=>d', [animate('100ms')])
    ]),
    trigger('text1', [
      state('off', style({ left: '-1000px' })),
      state('on', style({ left: '76.308px' })),
      state('d', style({ opacity: 0 })),
      transition('off=>on', [ animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]), // 큰 글씨 이징: 850ms
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

  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
    this.triggered = false;
    this.position = this.defaultX;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_1Page');

    this.hamsoo(`
    그럼 이제 오디쏘 어플 사용법을 알려드릴게요!
    똑똑한 쇼핑친구 서비스 ‘오디쏘'를 이용해 보세요!
    똑똑한 쇼핑친구 유니와 클로가 고객님의 쇼핑을 도와드릴게요. 튜토리얼이 끝난 후, 음성 안내모드를 이용하시면
    유니와 클로와 함께 쇼핑을 이어가실 수 있어요.
    다음으로 넘어가시려면 탭 한 번 해주세요!
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
    //this.hamsoo('네 잘 하셨어요~ ');
    setTimeout(()=> {
      this.navCtrl.push(Tut2_2Page, {}, { animate: false });
    }, 1500);
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
            this.navCtrl.push(T5Page, {}, { animate: false });
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

