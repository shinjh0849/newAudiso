import { RecommendColorPage } from './../recommend-color/recommend-color';
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
 * Generated class for the RecommendPricePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-recommend-price',
  templateUrl: 'recommend-price.html',
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
        opacity: 1
      })),
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 1
      })),
      state('l3', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
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
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
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
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 1
      })),
      state('l3', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
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
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         
      })),
      state('l3', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

    //오른쪽 아이콘과 그의 색깔 다른 친구들
     trigger('rP', [
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
         opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 1
      })),
       state('l3', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

      trigger('rM', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 1
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

      trigger('rL', [
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
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 0
      })),
     state('l3', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

    trigger('r', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         
      })),
      state('l3', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
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
      state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(-120deg) translateY(-370px) rotate(120deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
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
           opacity: 1
        })),
        state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         opacity: 1
      })),
      state('l3', style({
        transform: 'rotate(-120deg) translateY(-370px) rotate(120deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
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
     state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
         
      })),
       state('l3', style({
        transform: 'rotate(-120deg) translateY(-370px) rotate(120deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

    //r2와 색깔 다른 친구들
     trigger('r2P', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

      trigger('r2M', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 1
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         opacity: 1
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 1
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

      trigger('r2L', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
         opacity: 1
      })),
     state('l3', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

    trigger('r2', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        
      })),
      state('l3', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),
    
    //r3와 색깔 다른 친구들
     trigger('r3', [
      state('m', style({ 
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         
      })),
      state('r', style({
        transform: 'rotate(120deg) translateY(-370px) rotate(-120deg)',
         
      })),
      state('l', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         
      })),
      state('l2', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        
      })),
      state('l3', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

    trigger('r3P', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

      trigger('r3B', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 1
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         opacity: 1
      })),
      state('l', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 1
      })),
      state('l2', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 1
      })),
      state('l3', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

      trigger('r3N', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
         opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
         opacity: 0
      })),
      state('l3', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')]),
      transition('l2<=>l3', [animate('0.3s')])
    ]),

     

  ]
})
export class RecommendPricePage {

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
    this.navCtrl.push(RecommendColorPage);
  }


  moveButton(e){
      console.log(this.triggered);
      console.log(this.roomState);
      if(e.deltaX >= 50 && this.triggered == false){
        // 오른쪽으로 넘기기 발생
        this.triggered = true;
        this.panXi = this.inneerDefault;
        if(this.roomState == 'l')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'r';
        else if(this.roomState == 'l2')
          this.roomState = 'l';
        else if(this.roomState == 'l3')
          this.roomState = 'l2'
        
      } else if (e.deltaX <= -50 && this.triggered == false){
        //왼 쪽으로 넘기기 발생
        this.triggered = true;
        this.panXi = this.inneerDefault;
        if(this.roomState == 'r')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'l'; 
        else if(this.roomState == 'l')
          this.roomState = 'l2';
        else if (this.roomState == 'l2')
          this.roomState = 'l3';
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
