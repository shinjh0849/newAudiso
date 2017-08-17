import {
  Component,
  trigger,
  transition,
  style,
  animate,
  group,
  state
} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  animations: [

    //글씨 날아오는거
    trigger('flyin', [
      state('out', style({
        left: '-300px'
      })),
      state('in', style({
        left: '32px'
      })),
      state('down', style({
        opacity: '0'
      })),
      transition('out=>in', [
        animate('0.5s 1.5s cubic-bezier(.67,1.28,.64,1.35)')
      ]),
      transition('in=>down', [
        animate('0.7s cubic-bezier(.67,1.28,.64,1.35)')
      ])
    ]),

    // 가운데 아이콘과 그의 색깔 다른 친구들
    //가운데 흰색
    trigger('middleCircleW', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg) ',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg)',
        opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    //가운데 파란색
    trigger('middleCircleB', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg) ',
        opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
        opacity: 0
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    //가운데 핑쿠
    trigger('middleCircleP', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg) ',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
        opacity: 1
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    //밑에 깔려있는 흰색 + shadow
    trigger('middleCircle', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg) ',
        
    })),
      state('r', style({
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg) ',
        
      })),
      state('l', style({
        transform: 'rotate(-33deg) translateY(-420px) rotate(33deg) ',
        
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),


    //오른쪽 아이콘과 그의 색깔 다른 친구들
      //오른쪽 흰색
     trigger('rightCircleW', [
      state('m', style({ 
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-420px) rotate(-60deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
         opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
      //오른쪽 파란색
    trigger('rightCircleB', [
      state('m', style({ 
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg)',
         opacity: 1
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-420px) rotate(-60deg)',
         opacity: 1
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

      //오른쪽 핑쿠
    trigger('rightCircleP', [
      state('m', style({ 
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-420px) rotate(-60deg)',
         opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    // 오른쪽 밑바닥 흰색 +그림자
    trigger('rightCircle', [
      state('m', style({ 
        transform: 'rotate(33deg) translateY(-420px) rotate(-33deg)',
         
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-420px) rotate(-60deg)',
         
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    //왼쪽 아이콘과 그의 색깔 다른 친구들
      //왼쪽 흰색
    trigger('leftCircleW', [
      state('m', style({ 
        transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
         opacity: 0
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
         opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-420px) rotate(60deg)',
         opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
    ]),
      //왼쪽 파란색
      trigger('leftCircleB', [
        state('m', style({ 
          transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
           opacity: 0
        })),
        state('r', style({
          transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
           opacity: 0
        })),
        state('l', style({
          transform: 'rotate(-60deg) translateY(-420px) rotate(60deg)',
           opacity: 0
        })),
        transition('m<=>r', [animate('0.3s')]),
        transition('m<=>l', [animate('0.3s')]),
    ]),
      //왼쪽 핑쿠
      trigger('leftCircleP', [
        state('m', style({ 
          transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
           opacity: 1
        })),
        state('r', style({
          transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
           opacity: 0
        })),
        state('l', style({
          transform: 'rotate(-60deg) translateY(-420px) rotate(60deg)',
           opacity: 1
        })),
        transition('m<=>r', [animate('0.3s')]),
        transition('m<=>l', [animate('0.3s')]),
    ]),

     trigger('leftCircle', [
      state('m', style({ 
        transform: 'rotate(-33deg) translateY(-420px) rotate(33deg)',
         
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-420px) rotate(0deg)',
         
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-420px) rotate(60deg)',
         
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
    ]),



  ]


})

export class HistoryPage {
  roomState: string = "m";
  panXi: number = 0;
  panXo: number = 0;
  inneerDefault = 136;
  outerDefault = 109;
  triggered: boolean = false;
  flyinState: string = "out";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
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
