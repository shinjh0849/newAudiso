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
    trigger('nav1', [
      state('off', style({ opacity: 0 })),
      state('on', style({ opacity: 100 })),
      transition('off<=>on', [animate('100ms')])
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
    ])
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

    // this.position = this.defaultX;

    this.startState = "on";
    this.tutorialState = "on";
    this.text1State = "on";
    this.nav1State = "on";
  }
  onLongPress(e) {
    this.text1State = "d";
    this.nav1State = "off";
    this.navCtrl.push(Tut2_2Page, {}, {animate: false});
  }
}

