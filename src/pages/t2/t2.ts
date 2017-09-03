//import { NativeAudio } from '@ionic-native/native-audio';
import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TextToSpeech } from '@ionic-native/text-to-speech';
import { T3Page } from "../t3/t3";

@Component({
  selector: 'page-t2',
  templateUrl: 't2.html',
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
       animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')
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
       animate('0.85s 1s cubic-bezier(.63,.28,.41,1.15)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    trigger('fly2', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '124.375px',
          width: '57.25px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '32.5px',
          top: '124.375px',
          width: '57.25px'
      })),
      transition('first => second', [
      animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly3', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '186.6px',
          width: '236px'
      })),
      state('second', style({
         padding: '0',
          border: '0', 
          left: '32.5px',
          top: '186.6px',
          width: '236px'
      })),
      transition('first => second', [
      animate('850ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly4', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '435px',
          width: '134px'
      })),
      state('second', style({
         padding: '0',
         border: '0',
         left: '32.5px',
         top: '435px',
         width: '134px'
      })),
      transition('first => second', [
        animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),         
      trigger('fly5', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-1000px',
          top: '497.5px',
          width: '107px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '126px',
          top: '497.5px',
          width: '107px'
      })),
      transition('first => second', [
       animate('1000ms 1.5s cubic-bezier(.45,.82,.8,1.05)')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
  
   ]})
export class T2Page {
  show0: string = "first";
  show1: string = "first";
  show2: string = "first";
  show3: string = "first";
  show4: string = "first";
  show5: string = "first"; 
  //nativeAudio: NativeAudio;

  constructor(/*private tts:TextToSpeech,*/ public navCtrl: NavController, public navParams: NavParams) {
    //this.nativeAudio = new NativeAudio;
  }

  ionViewDidLoad() {
    this.show0 = (this.show0 === "first" ? "second" : "first");
    this.show1 = (this.show1 === "first" ? "second" : "first");
    this.show2 = (this.show2 === "first" ? "second" : "first");
    this.show3 = (this.show3 === "first" ? "second" : "first");
    this.show4 = (this.show4 === "first" ? "second" : "first");
    this.show5 = (this.show5 === "first" ? "second" : "first");
    //this.hamsoo('오디쏘 서비스로 쇼핑을 시작하시려면 지문인식을 해주세요.');
    //this.PLAY();
    
  
  }

 /* PLAY () {
    this.nativeAudio.preloadSimple('test1', 'assets/sound/mm.wav').then(() => {
      this.nativeAudio.play('test1', () => console.log('fldjkflsf'));
    })
    this.nativeAudio.unload('test1');
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
*/

  onLongPress(e){
    this.navCtrl.push( T3Page, {}, {animate: false} );
  }
}
