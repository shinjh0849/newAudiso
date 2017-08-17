import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_4Page } from "../tut2-4/tut2-4";
import { Tut2_6Page } from "../tut2-6/tut2-6";

//튜토리얼-스타일체크 화면입니당
@Component({
  selector: 'page-tut2-5',
  templateUrl: 'tut2-5.html',
  animations: [
    trigger('text5', [
      state('off', style({ left: '-1000px' })),
      state('on', style({ left: '32.5px' })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [ animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),
  ]
})
export class Tut2_5Page {
  text5State: string = "off" ;
  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_5Page');


      this.text5State = "on";

      this.triggered = false;
       this.position = this.defaultX;

       this.hamsoo(`
          옷을 피팅하신 후 스타일체크 서비스로 코디 피드백을 받아보세요!
          피팅룸에 비치되어 있는 스타일체크 서비스를 이용하시면 혼자서도 코디 추천부터 전문가의 피드백까지도 받아 보실 수 있어요! (띠링)

          다음으로 넘어가시려면 탭 한 번 다시 들으시려면 더블탭을 이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
       `)

  }

    // 다시 들으시려면 탭 두번을
  doubleTapEvent() {
    console.log('double tap in page 4');
    this.hamsoo(`
          옷을 피팅하신 후 스타일체크 서비스로 코디 피드백을 받아보세요!
          피팅룸에 비치되어 있는 스타일체크 서비스를 이용하시면 혼자서도 코디 추천부터 전문가의 피드백까지도 받아 보실 수 있어요! (띠링)

          다음으로 넘어가시려면 탭 한 번 다시 들으시려면 더블탭을 이전으로 돌아가려면 왼쪽으로 스와이핑을 해주세요.
       `)
  }

  // 다음으로 넘어가시려면 탭 한번을
  clickEvent() {
    this.navCtrl.push(Tut2_6Page, {}, { animate: false });
  }
  
  // 이전으로 돌아가려면 왼쪽으로 스와이핑 해주세요.
  panEvent(e) {

    if (e.deltaX <= -140 && !this.triggered) {
      this.triggered = true;
      this.position = 66.5;
      //event 실행
      this.navCtrl.push(Tut2_4Page, {}, { animate: false });
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
