import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';

import { P1Page } from '../p1/p1';

@Component({
  selector: 'page-tutorial2',
  templateUrl: 'tutorial2.html',

  animations: [
    // 시작하는 원
    trigger('startCircle', [
      state('off', style({
        left: '-800px'
      })),
      state('on', style({
        left: '-360px'
      })),
      // 이부분도 더해야함(원 out 되는 부분)
      state('last', style({
        left: '740px',
        transform: 'scale(70)'
      })),
      transition('off=>on', [
        animate('1s 3s cubic-bezier(.46,.01,.13,1.06)'//, keyframes([
          //style({left: '-740px', offset: 0}),
          //style({left: '-330px', offset: 0.8}),
          //style({left: '-360px', offset: 1}),
          //]))
        )]
      ),
      transition('on=>last', [
        // animate('500ms 800ms', keyframes([
        //   style({left: '-360px', offset: 0}),
        //   style({left: '-390px', offset: 0.1})
        // ]))
        animate('500ms 800ms')

      ])
    ]),

    trigger('tutorial', [
      state('off', style({
        left: '-300px'
      })),
      state('on', style({
        left: '32.5px'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('1000ms 4s cubic-bezier(.46,.01,.13,1.06)')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),

    // 첫번째 나오는 텍스트
    trigger('text1', [
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
        animate('1000ms 3.4s cubic-bezier(.46,.01,.13,1.06)')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),

    // 두 번째 나오는 텍스트
    trigger('text2', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),

    //세번째 나오는 텍스트
    trigger('text3', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),
    // 스와이핑 하는 동그라미 움직임
    trigger('circle', [
      state('off', style({
        opacity: 0
      })),
      state('on', style({
        opacity: 100
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),
    trigger('text4', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),
    trigger('text5', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),
    trigger('text6', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),

    trigger('nav1', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ]),
    trigger('nav2', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ]),
    trigger('nav3', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ]),
    trigger('nav4', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ]),
    trigger('nav5', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ]),
  ]
})

export class Tutorial2Page {

  pageNum: number = 1;
  startState: string = "off";
  tutorialState: string = "off";
  text1State: string = "off";
  text2State: string = "off";
  text2State1: string = "off";
  text3State: string = "off";
  text4State: string = "off";
  text5State: string = "off";
  text6State: string = "off";
  circleState: string = "off";

  nav1State: string = "off";
  nav2State: string = "off";
  nav3State: string = "off";
  nav4State: string = "off";
  nav5State: string = "off";

  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;

  tts1: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
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

  async sayNav(navType): Promise<any> {
    try {
      if (navType == 'short') {
        await this.tts.speak({
          text: `
          다음으로 넘어가시려면 탭 한 번 다시 들으시려면 더블탭을 해주세요!
        `, 
          locale: 'ko-KR',
          rate: 1
        })
        console.log('navigate talking: short')
      }

      else if (navType == 'swipe') {
        await this.tts.speak({
          text: `
          다음으로 넘어가시려면 탭 한 번, 다시 들으시려면 더블탭을, 이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
        `,  
          locale: 'ko-KR',
          rate: 1
        })
        console.log('navigate talking: long with swipe')
      }
    }

    catch (e) {
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial2Page');

    this.pageNum = 1;

    this.startState = "on"

    this.position = this.defaultX;

    // 애니메이션
    // 페이지1: 소망님을 위한 똑똑한 쇼핑 친구 유니와 클로를 이용해 보세요! 
    if (this.pageNum == 1) {
      this.startState = "on";
      this.tutorialState = "on";
      this.text1State = "on";
      this.nav1State = "on";

      console.log(this.pageNum);
      /*
      this.hamsoo(`
      당신을 위한 똑똑한 쇼핑친구 ’유니와 클로'를 이용해 보세요! 
      똑똑한 쇼핑친구 유니와 클로가 소망님의 쇼핑을 도와드릴거에요.
      튜토리얼이 끝난 후, 언제든 ‘유니야'라고 불러주시면 질문을 하실 수 있고 
      음성 안내모드를 이용하시면 계속적으로 유니와 클로와 함께 쇼핑을 이어가실 수 있어요. 
      효과음이 들리면 화면 아무곳에 3초이상 터치하시거나, ‘유니야’를 불러주세요.
      `)
      */

    }

  }

  ////////////////////////////////// Gesture Event /////////////////////////////////
  
  //doubleTap 하는 경우 현재 페이지 리로드; 음성 반복 
  doubleTapEvent() {
    switch(this.pageNum) {
      case 2: { this.page2Load(); break; }
      case 3: { this.page3Load(); break; }
      case 4: { this.page4Load(); break; }
      case 5: { this.page5Load(); break; }
      case 6: { this.page6Load(); break; }
    }
  }

  clickEvent() {
    //console.log("pageNum:" + this.pageNum); 
    switch (this.pageNum) {
      case 2: { this.page3Load(); this.pageNum++; break; }
      case 3: { this.page4Load(); this.pageNum++; break; }
      case 4: { this.page5Load(); this.pageNum++; break; }
      case 5: { this.page6Load(); this.pageNum++; break; }
      case 6: { this.lastPage(); this.pageNum++; break; }
    }

  }

  backSwipe() {
    switch (this.pageNum) {
      case 3: { this.page2Load(); this.pageNum--; break; }
      case 4: { this.page3Load(); this.pageNum--; break; }
      case 5: { this.page4Load(); this.pageNum--; break; }
      case 6: { this.page5Load(); this.pageNum--; break; }
    }
  }

  panEvent(e) {

    if (e.deltaX <= -140 && !this.triggered) {
      this.triggered = true;
      this.position = 66.5;
      //event 실행
      this.backSwipe();
    }
    else if (this.position > 66.5) {
      this.position = this.defaultX + e.deltaX;
      if (e.isFinal == true) {
        this.position = this.defaultX;
        this.triggered = false;
      }
    }
  }

  // 페이지 1에서 2로 넘어가는 부분(longpress)
  // 페이지 2 로드: 직원을 한번 불러보시겠어요?
  onLongPress(e) {

    if (this.pageNum == 1) {
      this.text1State = "d";
      this.text2State = "on";
      this.text2State1 = "on";
      this.nav1State = "off";
      this.nav2State = "on";
      this.pageNum++;
    }

    /*
    this.hamsoo(`
      오디쏘는 직원도 부를 수 있답니다. 유니야를 부르시고 직원을 한 번 불러보시겠어요?
    `);
    */

  }


  //////////////////////////////////////////// PAGE Loading //////////////////////////////
  // 페이지 2 로드: 직원을 한번 불러보시겠어요?
  page2Load() {

    if (this.pageNum == 3) {
      this.text3State = "d";
      this.circleState = "d";
      this.text2State = "on";
      this.text2State1 = "on";
      this.nav3State = "off";
      this.nav2State = "on";
      console.log("page2Load from 3. pageNum:" + this.pageNum);
    }

    //this.sayNav('short');
  }

  // 2랑 3이랑 네비게이터가 같음 (같은 화면으로 되어있음) 그래서 네비게이터 안건드려도 됨!!!!
  // 페이지 3 로드: 직원을 한번 불러보시겠어요? - subtext 전환: 다시 들으시려면 탭 두번을, ...
  page3Load() {


    if (this.pageNum == 2) {
      this.text2State1 = "d";
      this.text3State = "on";
      this.circleState = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page3Load from 2. pageNum:" + this.pageNum);
    }
    if (this.pageNum == 4) {
      this.text4State = "d";
      this.text3State = "on";
      this.circleState = "on";
      this.nav3State = "off";
      this.nav2State = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page3Load from 4. pageNum:" + this.pageNum);
    }
  }

  // 네비게이터 숫자 헷갈리지 말자 ... 3페이지부터 2 ~ 6페이지 5
  // 페이지 4 로드: 유니와 클로와 함께 진열대도 둘러볼 수 있어요!
  page4Load() {
    if (this.pageNum == 3) {
      this.text2State = "d";
      this.text3State = "d";
      this.text4State = "on";
      this.nav2State = "off";
      this.nav3State = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page4Load from 3. pageNum:" + this.pageNum);
    }

    if (this.pageNum == 5) {
      this.text5State = "d";
      this.text4State = "on";
      this.nav4State = "off";
      this.nav3State = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page4Load from 5. pageNum:" + this.pageNum);
    }

    //this.sayNav('swipe');
  }

  // 페이지 5 로드: 피팅 후 스타일 체크로 코디 피드백을 받아보세요
  page5Load() {
    if (this.pageNum == 4) {
      this.text4State = "d";
      this.text5State = "on";
      this.nav3State = "off";
      this.nav4State = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page5Load from 4. pageNum:" + this.pageNum);
    }

    if (this.pageNum == 6) {
      this.text6State = "d";
      this.text5State = "on";
      this.nav5State = "off";
      this.nav4State = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page5Load from 6. pageNum:" + this.pageNum);
    }

  }

  // 페이지 6 로드: 각각의 의류 상품 태그를 통해 상세정보도 알아보세요
  page6Load() {
    if (this.pageNum == 5) {
      this.text5State = "d";
      this.text6State = "on";
      this.nav4State = "off";
      this.nav5State = "on";
      this.triggered = false;
      this.position = this.defaultX;
      console.log("page6Load from 5. pageNum:" + this.pageNum);
    }

  }
  // 다같이 오른쪽으로 날아가야 하는데 아직 안함
  lastPage() {
    this.startState = "last";
    this.navCtrl.push(P1Page);
  }


}