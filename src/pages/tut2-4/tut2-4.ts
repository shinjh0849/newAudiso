import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_5Page } from "../tut2-5/tut2-5";
import { Tut2_2Page } from "../tut2-2/tut2-2";

@Component({
  selector: 'page-tut2-4',
  templateUrl: 'tut2-4.html',
  animations: [
    trigger('text4', [
      state('off', style({ left: '-1000px' })),
      state('on', style({ left: '32.5px' })),
      state('d', style({ opacity: 0 })),
      transition('off=>on', [
        animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),
    trigger('nav3', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
    ]),
  ]
})
export class Tut2_4Page {
  text4State: string = "off";
  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }
  // 페이지 4 로드: 유니와 클로와 함께 진열대도 둘러볼 수 있어요!
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_4Page');

    this.text4State = "on";

    this.triggered = false;
    this.position = this.defaultX;

    this.hamsoo(`
            유니와 클로와 함께 진열대도 둘러볼 수 있어요!
            진열대를 지나가면 실시간으로 진열대에 대한 설명을 들으실 수 있답니다.
            특정 진열대에서 5초 이상 계시면, 진열대에 진열된 상품들의 가격, 핏, 재질과 같은 추가 정보를 들으실 수도 있어요.
            음성 끝나고 바로) 다음으로 넘어가시려면 탭 한 번 
            다시 들으시려면 더블탭을 
            이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
      `);

  }

  // 다시 들으시려면 탭 두번을
  doubleTapEvent() {

    console.log('double tap in page 4');
    this.hamsoo(`
            유니와 클로와 함께 진열대도 둘러볼 수 있어요!
            진열대를 지나가면 실시간으로 진열대에 대한 설명을 들으실 수 있답니다.
            특정 진열대에서 5초 이상 계시면, 진열대에 진열된 상품들의 가격, 핏, 재질과 같은 추가 정보를 들으실 수도 있어요.
            음성 끝나고 바로) 다음으로 넘어가시려면 탭 한 번 
            다시 들으시려면 더블탭을 
            이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
      `);
  }

  // 다음으로 넘어가시려면 탭 한번을
  clickEvent() {
    this.navCtrl.push(Tut2_5Page, {}, { animate: false });
  }

  // 이전으로 돌아가려면 왼쪽으로 스와이핑 해주세요.
  panEvent(e) {

    if (e.deltaX <= -140 && !this.triggered) {
      this.triggered = true;
      this.position = 66.5;
      //event 실행
      this.navCtrl.push(Tut2_2Page, {}, { animate: false });
    }
    else if (this.position > 66.5) {
      this.position = this.defaultX + e.deltaX;
      if (e.isFinal == true) {
        this.position = this.defaultX;
        this.triggered = false;
      }
    }
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
