import { RecommendPricePage } from './../recommend-price/recommend-price';
import { P1Page } from './../p1/p1';

import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the RecommendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
  animations : [
    // 가운데 아이콘과 그의 색깔 다른 친구들
    trigger('middleCircleR', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg) ',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    trigger('middleCircleM', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg) ',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 0
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    trigger('middleCircleL', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg) ',
        opacity: 0
    })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg) ',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg) ',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    trigger('middleCircle', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg) ',
        
    })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg) ',
        
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg) ',
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    //오른쪽 아이콘과 그의 색깔 다른 친구들
     trigger('rightCircleR', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 1
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 1
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

      

      trigger('rightCircleL', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('rightCircle', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    //왼쪽 아이콘과 그의 색깔 다른 친구들
    trigger('leftCircleR', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
    ]),

      trigger('leftCircleM', [
        state('m', style({ 
          transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
           opacity: 1
        })),
        state('r', style({
          transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
           opacity: 0
        })),
        state('l', style({
          transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
           opacity: 0
        })),
        transition('m<=>r', [animate('0.3s')]),
        transition('m<=>l', [animate('0.3s')]),
    ]),

      trigger('leftCircleL', [
        state('m', style({ 
          transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
           opacity: 0
        })),
        state('r', style({
          transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
           opacity: 0
        })),
        state('l', style({
          transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
           opacity: 1
        })),
        transition('m<=>r', [animate('0.3s')]),
        transition('m<=>l', [animate('0.3s')]),
    ]),

     trigger('leftCircle', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
    ]),

  ]
})
export class RecommendPage {
   roomState: string = "m";
   panXi: number = 0;
   panXo: number = 0;
   inneerDefault = 136;
   outerDefault = 109;
   triggered: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
    this.panXi = this.inneerDefault;
    this.panXo = this.outerDefault
  }
  
  nextP(){
    console.log("이야 신난다");
    this.navCtrl.push(RecommendPricePage);
  }


  moveButton(e){
      console.log(this.triggered);
      console.log(this.roomState);
      if(e.deltaX >= 50 && this.triggered == false){
        // 오른쪽으로 넘기기 발생
        this.triggered = true;
        //this.panXi = this.inneerDefault;
        if(this.roomState == 'l')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'r';

        
      } else if (e.deltaX <= -50 && this.triggered == false){
        //왼 쪽으로 넘기기 발생
        this.triggered = true;
        //this.panXi = this.inneerDefault;
        if(this.roomState == 'r')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'l';
      } else {
        //넘기기 발생 안했을 때, 조이스틱 움직이는 코드
        this.panXi = this.inneerDefault + e.deltaX;
        if(e.isFinal == true){
          this.panXi = this.inneerDefault;
          this.triggered = false;
        }
      }
  }
}
