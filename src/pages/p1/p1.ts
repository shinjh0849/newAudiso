import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RecommendPage } from '../recommend/recommend';

@Component({
  selector: 'page-p1',
  templateUrl: 'p1.html',
  animations: [
    trigger('flyUQ', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-100px',
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
        animate('1s')
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
          left: '-100px',
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
        animate('1s')
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
          left: '-100px',
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
        animate('1s')
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
          left: '-100px',
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
        animate('1s')
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
        animate('1s 0.7s')
      ]),
      transition('first => second', [
        animate('0.2s')
      ]),
      transition('second => third', [
        animate('0.4s',  keyframes([
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
          width: '62.2813px',
          height: '27.5px'
      })),
      state('first', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '617.4645px',
          width: '62.2813px',
          height: '27.5px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '-140px',
          width: '62.2813px',
          height: '27.5px'
      })),
            transition('none => first', [
        animate('1s 0.7s')
      ]),
      transition('first => second', [
        animate('0.1s')
      ])
    ]),
    /////////////////////////////
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
        animate('0.2s')
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
        animate('0.2s')
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
        animate('0.2s')
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
          top: '1000px', //
          width: '145.7205px',
          height: '145.7205px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '109.1475px',
          top: '497.5px', 
          width: '145.7205px',
          height: '145.7205px'
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
        animate('0.2s')
      ]),
       transition('second => rotate', [
        animate('2s', style({transform: 'rotate(1000deg)'})) // 음성인식으로 고치기
      ]),
        transition('rotate => third', [
        animate('0.02s')
      ])
    ]),
    trigger('flyNewReco', [
      state('first', style({
          padding: '0',
          border: '0',
          left: '32px',
          top: '-100px', // 빠르기 조절
          width: '107.4758px',
          height: '16.75px'
      })),
        // 
      state('second', style({
          padding: '0',
          border: '0',
          left: '32px',
          top: '124px',
          width: '107px',
          height: '17px'
      })),
        
      transition('first => second', [
        animate('0.2s 0.3s')
      ]),
    ]),
    
    trigger('flyCate', [
      state('first', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '-100px', // 빠르기 조절
          width: '107.4758px',
          height: '16.75px'
      })),
        // 
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.px',
          top: '157px',
          width: '197px',
          height: '35px'
      })),
        
      transition('first => second', [
        animate('0.2s 0.3s')
      ]),   
    ])
  ]
})


export class P1Page {

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
  showNewReco: string = "first";
  showCate: string = "first";
   constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.showUQ = (this.showUQ === "first" ? "second" : "first");
    this.showT1 = (this.showT1 === "first" ? "second" : "first");
    this.showT2 = (this.showT2 === "first" ? "second" : "first");
    this.showUni = (this.showUni === "first" ? "second" : "first");
    this.showCircleUp = (this.showCircleUp === "none" ? "first" : "none");
    this.showQloUp = (this.showQloUp === "none" ? "first" : "none");
  }
  

  upCircle(){
    this.showCircleUp = (this.showCircleUp === "first" ? "second" : "first");
    this.showQloUp = (this.showQloUp === "first" ? "second" : "first");
    this.showRecoUp = (this.showRecoUp === "first" ? "second" : "first");
    this.showT3Up = (this.showT3Up === "first" ? "second" : "first");
    this.showT4Up = (this.showT4Up === "first" ? "second" : "first");
    this.showBUp = (this.showBUp === "first" ? "second" : "first");
  }
  rotate(){ // 버튼 클릭해
    this.showBUp = (this.showBUp === "second" ? "rotate" : "second");
  }
  onNext(){
  
    this.showCircleUp = (this.showCircleUp === "second" ? "third" : "second");
  
    this.showUQ = (this.showUQ === "second" ? "disA" : "second");
    this.showT1 = (this.showT1 === "second" ? "disA" : "second");
    this.showT2 = (this.showT2 === "second" ? "disA" : "second");
    this.showUni = (this.showUni === "second" ? "disA" : "second");
  
    this.showRecoUp = (this.showRecoUp === "second" ? "third" : "second")
    this.showT3Up = (this.showT3Up === "second" ? "third" : "second");
    this.showT4Up = (this.showT4Up === "second" ? "third" : "second");
    this.showBUp = (this.showBUp === "rotate" ? "third" : "rotate");
    this.showNewReco = (this.showNewReco === "first" ? "second" : "first");
    this.showCate = (this.showCate === "first" ? "second" : "first");
    this.navCtrl.push(RecommendPage);
  }


}


