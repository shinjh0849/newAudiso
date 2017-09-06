import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_5Page } from "../tut2-5/tut2-5";
import { P1_1Page } from "../p1-1/p1-1";


@Component({
  selector: 'page-tut2-6',
  templateUrl: 'tut2-6.html',
  animations: [
    trigger('text6', [
      state('off', style({ left: '-1000px' })),
      state('on', style({ left: '32.5px' })),
      state('d', style({ left: '375px' })),
      transition('off=>on', [animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]),
      transition('on=>d', [animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')])
    ]),
    trigger('circle', [
      state('on', style({ left: '-360px' })),
      state('go', style({ left: '0px' })),
      // transition('void=>on',),
      transition('on=>go', [
        animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')])
    ]),
    trigger('circleS', [
      state('on', style({ left: '-372px' })),
      state('go', style({ left: '0px' })),
      // transition('void=>on',),
      transition('on=>go', [
        animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')])
    ]),
    trigger('gogo', [
      state('go', style({ left: '802px' })),
      transition('*=>go', [animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')])
    ]),
  ],
})

export class Tut2_6Page {
  circleState: string = "on";
  text6State: string = "off";
  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts:TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_6Page');


    this.text6State = "on";
    this.circleState = "on";
    this.triggered = false;
    this.position = this.defaultX;

    this.hamsoo(`
      각각의 상품 가격표에 달려있는 QR코드를 통해 상세정보도 알아 보세요!

      다음으로 넘어가시려면 탭 한 번 다시 들으시려면 더블탭을 이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
    `);

  }

  // 다시 들으시려면 탭 두번을
  doubleTapEvent() {
    console.log('double tap in page 4');
    this.circleState = "go";
    this.hamsoo(`
      각각의 상품 가격표에 달려있는 QR코드를 통해 상세정보도 알아 보세요!

      다음으로 넘어가시려면 탭 한 번 다시 들으시려면 더블탭을 이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
    `);

  }

  // 다음으로 넘어가시려면 탭 한번을
  clickEvent() {
    //this.circleState = "go";
    //this.text6State = "d";

    //setTimeout(() => {
      this.navCtrl.push(P1_1Page, {}, { animate: false });
    //}, 2000);
  }


  // 이전으로 돌아가려면 왼쪽으로 스와이핑 해주세요.
  panEvent(e) {

    if (e.deltaX <= -140 && !this.triggered) {
      this.triggered = true;
      this.position = 66.5;
      //event 실행
      this.navCtrl.push(Tut2_5Page, {}, { animate: false });
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
