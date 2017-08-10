import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DomController } from 'ionic-angular';
import { Tut2_5Page } from "../tut2-5/tut2-5";
import { P1Page } from "../p1/p1";


@Component({
  selector: 'page-tut2-6',
  templateUrl: 'tut2-6.html',
  animations: [
    trigger('text6', [
      state('off', style({ left: '-740px' })),
      state('on', style({ left: '32.5px' })),
      state('d', style({ left: '375px' })),
      transition('off=>on', [animate('1000ms 150ms cubic-bezier(.46,.01,.13,1.06)')]),
      transition('on=>d', [animate('100ms')])
    ]),
    trigger('circle', [
      state('on', style({ left: '-360px' })),
      state('go', style({ left: '0px' })),
      // transition('void=>on',),
      transition('on=>go', [
        animate('1000ms 150ms cubic-bezier(.46,.01,.13,1.06)')])
    ]),
    trigger('circleS', [
      state('on', style({ left: '-372px' })),
      state('go', style({ left: '0px' })),
      // transition('void=>on',),
      transition('on=>go', [
        animate('1000ms 150ms cubic-bezier(.46,.01,.13,1.06)')])
    ]),
    trigger('gogo', [
      state('go', style({ left: '802px' })),
      transition('*=>go', [animate('2000ms 10ms cubic-bezier(.46,.01,.13,1.06)')])
    ]),
  ],
})

export class Tut2_6Page {
  circleState: string = "on";
  text6State: string = "off";
  position: number = 0;
  defaultX: number = 201.39475;
  triggered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut2_6Page');


    this.text6State = "on";
    this.circleState = "on";
    this.triggered = false;
    this.position = this.defaultX;

  }

  // 다시 들으시려면 탭 두번을
  doubleTapEvent() {
    console.log('double tap in page 4');
    this.circleState = "go";

  }

  // 다음으로 넘어가시려면 탭 한번을
  clickEvent() {
    this.circleState = "go";
    this.text6State = "d";

    setTimeout(() => {
      this.navCtrl.push(P1Page, {}, { animate: false });
    }, 2000);
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


}