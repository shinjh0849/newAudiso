import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { T4Page } from "../t4/t4";

@Component({
  selector: 'page-t3',
  templateUrl: 't3.html',
    animations: [
     trigger('fly0', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-800px',
          top: '0px',
          width: '740px',
          height: '740px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '-372px',
          top: '-7px',
          width: '765px',
          height: '765px'
      })),
      transition('first => second', [
        animate('0.01s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
     trigger('fly1', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-800px',
          top: '0px',
          width: '740px',
          height: '740px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '-360px',
          top: '0px',
          width: '740px',
          height: '740px'
      })),
      transition('first => second', [
        animate('0.01s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    trigger('fly6', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '132.75px',
          width: '73.5px'
        })),
      state('second', style({
         padding: '0',
          border: '0',   
          left: '32.5px',
          top: '132.75px',
          width: '73.5px'
      })),
      transition('first => second', [
       animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    trigger('fly7', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '200px',
          width: '262px'
      })),
      state('second', style({
         padding: '0',
          border: '0', 
          left: '32.5px',
          top: '200px',
          width: '262px'
      })),
      transition('first => second', [
      animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s 1s')
      ])
    ]), 
      trigger('fly8', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '400px',
          width: '125px'
      })),
      state('second', style({
         padding: '0',
          border: '0', 
          left: '32.5px',
          top: '400px',
          width: '125px'
      })),
      transition('first => second', [
       animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s 1s')
      ])
    ]), 
// 손가락 버튼
      trigger('fly9', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '135px',
          top: '515px',
          width: '84.5px',
          opacity: 0
      })),
      state('second', style({
         padding: '0',
         border: '0',
         left: '135px',
         top: '515px',
         width: '84.5px',
         opacity: 1
         
      })),
      transition('first => second', [
        animate('1s 1.5s')
      ]),
      transition('second => disA', [
        animate('1.5s', keyframes([
           style({ transform: 'scale3d(1, 1, 1)', offset: 0.15}),
           style({ transform: 'scale3d(1.2, 1.2, 1.2)', offset: 0.25}),
           style({ transform: 'scale3d(1, 1, 1)', offset: 0.35}),
           style({ transform: 'scale3d(1.3, 1.3, 1.3)', offset: 0.45}),
           style({ transform: 'scale3d(1, 1, 1)', offset: 0.55}),
           style({  opacity: 0 , offset: 1.0}),
        ]))
      ])

    ]),         
      trigger('fly10', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '650px',
          width: '68.75px',

      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '650px',
          width: '68.75px',

      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s 1s')
      ])
    ]), 

    ]})

export class T3Page {
  show0: string = "first";
  show1: string = "first";

  show6 : string = "first";
  show7 : string = "first";
  show8 : string = "first";
  show9 : string = "first";
  show10: string = "first"; 


  constructor(private tts:TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.show0 = (this.show0 === "first" ? "second" : "first");
    this.show1 = (this.show1 === "first" ? "second" : "first");

    this.show6 = (this.show6 === "first" ? "second" : "first");
    this.show7 = (this.show7 === "first" ? "second" : "first");
    this.show8 = (this.show8 === "first" ? "second" : "first");
    this.show9 = (this.show9 === "first" ? "second" : "first");
    this.show10 = (this.show10 === "first" ? "second" : "first");

    this.hamsoo(`쇼핑 시작 전에, 간단한 어플사용방법을 알려드릴게요. 
    먼저 어플 내 서비스 이용을 위한 간단한 손가락 제스쳐을 알려드릴게요. 
    제가 말씀드리는 동작을 화면에 그대로 따라해주세요.  
     첫번째 동작은 ‘탭 두번’ 이에요. 준비가 되시면 화면에 탭 두 번 해주세요`)
    
  }

    async hamsoo(hungry): Promise <any> {
  try {
    await this.tts.speak({
      text: hungry,
      locale: 'ko-KR'})
    console.log("hi")
  } 
  catch(e) {
  }
 }

 onDoubleTap(){
   
    this.hamsoo('네, 잘하셨어요.');
    /* 탭 하면 두근두근 하는건데 tts 때문에 되지 않는다.
    this.show9 = (this.show10 === "second" ? "disA" : "second");
    */
     //setTimeout(() => {
     this.navCtrl.push( T4Page, {}, {animate: false} );
   // }, 1500);
 
    
   }
}

  
