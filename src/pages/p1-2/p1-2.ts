import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { RecommendPage } from "../recommend/recommend";

@Component({
  selector: 'page-p1-2',
  templateUrl: 'p1-2.html',
  animations: [
    trigger('flyCircleUp', [
      state('none', style({
        padding: '0',
        border: '0',
        left: '-190px',
        top: '1000.5px',
        width: '740px',
        height: '740px'
      })),
      state('first', style({
        padding: '0',
        border: '0',
        left: '-190px',
        top: '559.5px',
        width: '740px',
        height: '740px'
      })),
      state('second', style({
        padding: '0',
        border: '0',
        left: '-190px',
        top: '-60.5px',
        width: '740px',
        height: '740px'
      })),
      state('third', style({
        padding: '0',
        border: '0',
        left: '-190px',
        top: '369.5px',
        width: '740px',
        height: '740px'
      })),
      transition('none => first', [
        animate('1s 0.7s')
      ]),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => third', [
        animate('0.5s')
      ]),

    ])
    ,
    trigger('flyQloUp', [
      state('none', style({
        padding: '0',
        border: '0',
        left: '145.4688px',
        top: '1000px',
        width: '62.2813px',
        height: '27.5px'
      })),
      state('first', style({
        padding: '0',
        border: '0',
        left: '145.4688px',
        top: '617.4645px',
        width: '62.2813px',
        height: '27.5px'
      })),
      state('second', style({
        padding: '0',
        border: '0',
        left: '145.4688px',
        top: '-140px',
        width: '62.2813px',
        height: '27.5px'
      })),
      transition('none => first', [
        animate('1s 0.7s')
      ]),
      transition('first => second', [
        animate('0.1s')
      ])
    ]),
    /////////////////////////////
    trigger('flyRecoUp', [
      state('first', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '1000px', // 빠르기 조절
        width: '107.4758px',
        height: '16.75px'
      })),
      // 
      state('second', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '124.375px',
        width: '107.4758px',
        height: '16.75px'
      })),
      state('third', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '-1000px',
        width: '107.4758px',
        height: '16.75px'
      })),
      transition('first => second', [
        animate('0.2s')
      ]),
      transition('second => third', [
        animate('0.02s')
      ])
    ]),
    trigger('flyT3Up', [
      state('first', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '1000px', //
        width: '302.4643px',
        height: '154px'
      })),
      state('second', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '186.5625px',
        width: '302.4643px',
        height: '154px'
      })),
      state('third', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '-1000px',
        width: '302.4643px',
        height: '154px'
      })),
      transition('first => second', [
        animate('0.2s')
      ]),
      transition('second => third', [
        animate('0.02s')
      ])
    ]),
    trigger('flyT4Up', [
      state('first', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '1000px', //
        width: '289.8368px',
        height: '63.75px'
      })),
      state('second', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '373.125px',//
        width: '289.8368px',
        height: '63.75px'
      })),
      state('third', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '-1000px',//
        width: '289.8368px',
        height: '63.75px'
      })),
      transition('first => second', [
        animate('0.2s')
      ]),
      transition('second => third', [
        animate('0.02s')
      ])
    ]),
    trigger('flyBUp', [
      state('first', style({
        padding: '0',
        border: '0',
        left: '109.1475px',
        top: '1000px', //
        width: '145.7205px',
        height: '145.7205px'
      })),
      state('second', style({
        padding: '0',
        border: '0',
        left: '109.1475px',
        top: '497.5px',
        width: '145.7205px',
        height: '145.7205px'
      })),
      state('rotate', style({
        padding: '0',
        border: '0',
        left: '109.1475px',
        top: '497.5px',
        width: '145.7205px',
        height: '145.7205px'
      })),
      state('third', style({
        padding: '0',
        border: '0',
        left: '109.1475px',
        top: '497.5px',
        width: '145.7205px',
        height: '145.7205px'
      })),
      transition('first => second', [
        animate('0.2s')
      ]),
      transition('second => rotate', [
        animate('2s', style({ transform: 'rotate(1000deg)' })) // 음성인식으로 고치기
      ]),
      transition('rotate => third', [
        animate('0.02s')
      ])
    ]),
    trigger('flyNewReco', [
      state('first', style({
        padding: '0',
        border: '0',
        left: '32px',
        top: '-100px', // 빠르기 조절
        width: '107.4758px',
        height: '16.75px'
      })),
      // 
      state('second', style({
        padding: '0',
        border: '0',
        left: '32px',
        top: '124px',
        width: '107px',
        height: '17px'
      })),

      transition('first => second', [
        animate('0.2s 0.3s')
      ]),
    ]),

    trigger('flyCate', [
      state('first', style({
        padding: '0',
        border: '0',
        left: '32.5px',
        top: '-100px', // 빠르기 조절
        width: '107.4758px',
        height: '16.75px'
      })),
      // 
      state('second', style({
        padding: '0',
        border: '0',
        left: '32.px',
        top: '157px',
        width: '197px',
        height: '35px'
      })),

      transition('first => second', [
        animate('0.2s 0.3s')
      ]),
    ])
  ]
})


export class P1_2Page {
  showCircleUp: string = "second";
  showQloUp: string = "second";

  showRecoUp: string = "second";
  showT3Up: string = "second";
  showT4Up: string = "second";
  showBUp: string = "second";

  showNewReco: string = "first";
  showCate: string = "first";

  constructor(private tts: TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.hamsoo(`안녕하세요? 고객님의 쇼핑친구가 되어드릴 유니입니다. 
    혹시 오늘 보고 싶은 옷이 있으신가요? 보고 싶은 옷의 가격대와 소재, 색상을 알려주시면 유니가 옷을 추천 해 드릴게요. 
    지금 특별히 보고 싶은 옷이 있으시면 탭 한 번을, 없으시면 탭 두 번을 눌러주세요.`);
  }
  async hamsoo(hungry): Promise<any> {
    try {
      await this.tts.speak({
        text: hungry,
        locale: 'ko-KR'
      })
      console.log("hi")
    }
    catch (e) {
    }
  }

  /*
  우선 버튼 클릭하면 버튼이 돌게함. 이 함수는 html에서 이 버튼을 클릭하면 이 함수가 실행되서
  state를 변경시켜 에니메이션으로 rotate 되게 하는데 
  바꿀 때는 html 에서 음성이 인식된다는 사인을 주면 이 함수가 실행되게 하면 될 듯... ㅎㅎ
   */
  rotate() {
    this.navCtrl.push(RecommendPage, {}, { animate: false });
    // this.showBUp = (this.showBUp === "second" ? "rotate" : "second");
  }

  onNext() {

    // 이 부분은 보라 원이 위로 갔다가 아래로 가면서 추천 화면으로 바뀌는 에니메이션인데 이게 핸드폰에서 안된다. 그냥 다음 화면으로 넘어간다ㅜㅜ 
    this.showCircleUp = (this.showCircleUp === "second" ? "third" : "second");
    this.showRecoUp = (this.showRecoUp === "second" ? "third" : "second")
    this.showT3Up = (this.showT3Up === "second" ? "third" : "second");
    this.showT4Up = (this.showT4Up === "second" ? "third" : "second");
    this.showBUp = (this.showBUp === "rotate" ? "third" : "rotate");
    this.showNewReco = (this.showNewReco === "first" ? "second" : "first");
    this.showCate = (this.showCate === "first" ? "second" : "first");

    setTimeout(() => {
      this.navCtrl.push(RecommendPage, {}, { animate: false });
    }, 3000);

  }
  
  onNextnew() {
    this.navCtrl.push(RecommendPage, {}, { animate: false });
  }

}
