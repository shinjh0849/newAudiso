import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { P1_2Page } from "../p1-2/p1-2";


@Component({
  selector: 'page-p1-1',
  templateUrl: 'p1-1.html',
  animations: [
    trigger('flyUQ', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '124.375px',
          width: '76.3365px',
          height: '16.75px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '32.5px',
          top: '124.375px',
          width: '76.3365px',
          height: '16.75px'
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('flyT1', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '186.5625px',
          width: '251.136px',
          height: '154px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '32.5px',
          top: '186.5625px',
          width: '251.136px',
          height: '154px'
      })),
      transition('first => second', [
        animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('flyT2', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '373.125px',
          width: '291.849px',
          height: '63.75px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '32.5px',
          top: '373.125px',
          width: '291.849px',
          height: '63.75px'
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),         
      trigger('flyUni', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '491.25px',
          width: '54.3283px',
          height: '26.25px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '149.672px',
          top: '491.25px',
          width: '54.3283px',
          height: '26.25px'
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    
    
    ////
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
        animate('1s 0.85s cubic-bezier(.63,.28,.41,1.15)')
      ]),
      transition('first => second', [
        animate('0.6s cubic-bezier(.63,.28,.41,1.15)')
      ]),
      transition('second => third', [
        animate('0.4s cubic-bezier(.63,.28,.41,1.15)',  keyframes([
        style({ top: '-100px', offset: 0.5}),
        style({ top: '369.5px', offset: 1.0})
      ]))
      ])
    ])
   ,
    trigger('flyQloUp', [
      state('none', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '1000px',
          width: '100px',
          height: '27.5px'
      })),
      state('first', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '617.4645px',
          width: '62.2813px',
          height: '27.5px',
          opacity: 1
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '617.4645px',
          width: '62.2813px',
          height: '27.5px',
          opacity: 0
      })),
        transition('none => first', [
        animate('1s 0.8s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('first => second', [
        animate('0.1s')
      ])
    ]),
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
        animate('0.15s')
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
        animate('0.15s')
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
        animate('0.15s')
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
          top: '497.5px', //
          width: '145.7205px',
          height: '145.7205px',
          opacity: 0
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '109.1475px',
          top: '497.5px', 
          width: '145.7205px',
          height: '145.7205px',
          opacity: 1
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
        animate('0.01 cubic-bezier(.45,.82,.8,1.05)')
      ]),
       transition('second => rotate', [
        animate('2s', style({transform: 'rotate(1000deg)'})) 
      ]),
        transition('rotate => third', [
        animate('0.02s')
      ])
    ]),
]})
export class P1_1Page {
  showUQ: string = "first";
  showT1: string = "first";
  showT2: string = "first";
  showUni: string = "first"; 

  showCircleUp: string = "none";
  showQloUp: string = "none";

  showRecoUp: string = "first";
  showT3Up: string = "first";
  showT4Up: string = "first";
  showBUp: string = "first";

  constructor(private tts:TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showUQ = (this.showUQ === "first" ? "second" : "first");
    this.showT1 = (this.showT1 === "first" ? "second" : "first");
    this.showT2 = (this.showT2 === "first" ? "second" : "first");
    this.showUni = (this.showUni === "first" ? "second" : "first");
    this.showCircleUp = (this.showCircleUp === "none" ? "first" : "none");
    this.showQloUp = (this.showQloUp === "none" ? "first" : "none");
    this.hamsoo('유니와 함께하고 싶우면 위로 슬라이딩, 자상한 클로와 함께하고 싶으면 아래로 슬라이딩 해주세요.');
    
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

  upCircle(){
    this.showCircleUp = (this.showCircleUp === "first" ? "second" : "first");
    this.showQloUp = (this.showQloUp === "first" ? "second" : "first");
    this.showRecoUp = (this.showRecoUp === "first" ? "second" : "first");
    this.showT3Up = (this.showT3Up === "first" ? "second" : "first");
    this.showT4Up = (this.showT4Up === "first" ? "second" : "first");
    this.showBUp = (this.showBUp === "first" ? "second" : "first");

     
   setTimeout(() => {
      this.navCtrl.push( P1_2Page, {}, {animate: false} );
        }, 2500);
  }

}
