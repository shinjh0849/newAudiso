import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_4Page } from "../tut2-4/tut2-4";
import { Tut2_6Page } from "../tut2-6/tut2-6";


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_5Page');


      this.text5State = "on";

      this.triggered = false;
       this.position = this.defaultX;

  }

    // 다시 들으시려면 탭 두번을
  doubleTapEvent() {
    console.log('double tap in page 4');
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

}
