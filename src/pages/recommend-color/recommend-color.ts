import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecommendMaterialPage } from "../recommend-material/recommend-material";

/**
 * Generated class for the RecommendColorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-recommend-color',
  templateUrl: 'recommend-color.html',
  animations : [
    trigger('flyin', [
      state('out', style({
        left: '-250px'
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
    trigger('middleCircleS', [
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
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    trigger('middleCircleC', [
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
     trigger('rightCircleC', [
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

      trigger('rightCircleS', [
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
    trigger('leftCircleC', [
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

      trigger('leftCircleS', [
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
export class RecommendColorPage {
   flyinState: string = "out";
   roomState: string = "m";
   panXi: number = 0;
   panXo: number = 0;
   inneerDefault = 136;
   outerDefault = 109;
   triggered: boolean = false;

  constructor(private tts: TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
    this.panXi = this.inneerDefault;
    this.panXo = this.outerDefault;
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
    this.speak('스와이핑으로 원하시는 색상을 선택해주세요! 좌우 스와이핑를 통해 선택하실 수 있고 더블탭을 통해 입력 하실 수 있어요! 딱히 없으시면 화면 아래로 슬라이딩해주세요.');
  }
  
  nextP(){
    this.flyinState = 'down';
    this.speak('어두운 색상이 선택되셨습니다.');
    setTimeout(()=> {
      this.navCtrl.push(RecommendMaterialPage, {}, { animate: false });
    },1500) 
  }

  async speak(line): Promise<any>{
    try{
      await this.tts.speak({
        text: line,
        locale: 'ko-KR',
        rate: 1
      });
      console.log('speak function start!');
    }
    catch(e){

    }
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
