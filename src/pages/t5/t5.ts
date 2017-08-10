import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
 
//import { Tut2_1Page } from "../tut2-1/tut2-1"; // 이게 지혜언니 페이지
import { P1_1Page } from "../p1-1/p1-1";// 지혜언니 페이지로 넘겨야 한다.

@Component({
  selector: 'page-t5',
  templateUrl: 't5.html',
   animations: [
    trigger('fly0', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-500px',
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
          left: '-500px',
          top: '0px',
          width: '740px',
          height: '740px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '-370px',
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
          left: '32.5px',
          top: '132.75px',
          width: '73.5px',
          opacity: 0
        })),
      state('second', style({
         padding: '0',
          border: '0',   
          left: '32.5px',
          top: '132.75px',
          width: '73.5px',
          opacity: 1
      })),
      transition('first => second', [
       animate('0.01s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly17', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-300px',
          top: '564.693px',
          width: '84.61525px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '137.75px',
          top: '564.693px',
          width: '84.61525px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

      trigger('fly18', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '455.376px',
          width: '84.61525px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '137.75px',
          top: '455.376px',
          width: '84.61525px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

          trigger('fly19', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-300px',
          top: '186.5625px',
          width: '263.066px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '186.5625px',
          width: '263.066px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

          trigger('fly20', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '407.07575px',
          width: '179.69675px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '407.07575px',
          width: '179.69675px'
      })),
      transition('first => second', [
        animate('0.6s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

          trigger('fly21', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '650px',
          width: '68.75px',
          opacity: 0
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '650px',
          width: '68.75px',
          opacity: 1
      })),
      transition('first => second', [
        animate('0.01s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
]})
export class T5Page {
  show0: string = "first";
  show1: string = "first";
  
  show6 : string = "first";
  show17 : string = "first"; 
  show18 : string = "first";
  show19 : string = "first";
  show20 : string = "first";
  show21 : string = "first"; 

  yyy: number = 0;
  defaultY: number = 455;
  triggered2: boolean = false;
 
  constructor(private tts:TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {

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
  ionViewDidLoad() {
    this.show0 = (this.show0 === "first" ? "second" : "first");
    this.show1 = (this.show1 === "first" ? "second" : "first");
    this.show6 = (this.show6 === "first" ? "second" : "first");
    
    this.show17 = (this.show17 === "first" ? "second" : "first");
    this.show18 = (this.show18 === "first" ? "second" : "first");
    this.show19 = (this.show19 === "first" ? "second" : "first");
    this.show20 = (this.show20 === "first" ? "second" : "first");
    this.show21 = (this.show21 === "first" ? "second" : "first");
    
    this.yyy = this.defaultY;
    this.hamsoo('다음 동작은 ‘위아래로 슬라이딩’이에요. 이번엔 ‘아래로 슬라이딩’ 을 해볼까요? (띠링)');
    
  }

onNext2(e){
    console.log("yyy is  " + this.yyy);
    console.log("e.deltaY is  " + e.deltaY);
    if( e.deltaY >= 110 && !this.triggered2){ 
        this.triggered2 = true;
        this.yyy = 562;
        this.hamsoo('네, 잘하셨어요.');
        setTimeout(() => {
         this.navCtrl.push( P1_1Page, {}, {animate: false} ); // 지혜언니 페이지로 넘겨야 한다. Tut2_1Page
        }, 1000);
     } else if (e.deltaY < 110) {
           this.yyy = this.defaultY + e.deltaY;
          if(e.isFinal == true){
            this.yyy = this.defaultY;
            this.triggered2 = false;
          }
     }
  }
}
