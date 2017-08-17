import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { T5Page } from "../t5/t5";

@Component({
  selector: 'page-t4',
  templateUrl: 't4.html',
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
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 

         trigger('fly11', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
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
       animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
      trigger('fly12', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '373.0757px',
          width: '179.69675px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '373.0757px',
          width: '179.69675px'
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
     
      trigger('fly14', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '200.25px',
          top: '477.99225px',
          width: '84.61525px',
          opacity: 0
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '200.25px',
          top: '477.99225px',
          width: '84.61525px',
          opacity: 1
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
       trigger('fly15', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '71.25px',
          top: '477.99225px',
          width: '84.61525px',
          opacity: 0
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '71.25px',
          top: '477.99225px',
          width: '84.61525px',
          opacity: 1
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
       trigger('fly16', [
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
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

  ]})
export class T4Page {
  show0: string = "first";
  show1: string = "first";
 
  show6 : string = "first";
  show11 : string = "first"; 
  show12 : string = "first";
  show14 : string = "first";
  show15 : string = "first";
  show16 : string = "first"; 

  xxx: number = 0;
  defaultX: number = 71.25;
  triggered: boolean = false;

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
    this.show11 = (this.show11 === "first" ? "second" : "first");
    this.show12 = (this.show12 === "first" ? "second" : "first");
    this.show14 = (this.show14 === "first" ? "second" : "first");
    this.show15 = (this.show15 === "first" ? "second" : "first");
    this.show16 = (this.show16 === "first" ? "second" : "first");

    this.xxx = this.defaultX;
    this.hamsoo('다음 동작은 ‘좌우 스와이핑’이에요. 삐 소리가 들리면 화면을 왼쪽에서 오른쪽으로 스와이핑을 해주세요. 띠링');
  }

  onNext(e){  
    console.log("xxx is  " + this.xxx);
    console.log("e.deltaX is  " + e.deltaX);
      if( e.deltaX >= 129 && !this.triggered){ 
        this.triggered = true;
        this.xxx = 198.70; 
        this.hamsoo('네, 잘하셨어요.');
        setTimeout(() => {
         this.navCtrl.push( T5Page, {}, {animate: false} );
        }, 1500);
 
     } else if (e.deltaX < 129) {
      this.xxx = this.defaultX + e.deltaX;
          if(e.isFinal == true){
            this.xxx = this.defaultX;
            this.triggered = false;
          }
     }
    
    }
  }
