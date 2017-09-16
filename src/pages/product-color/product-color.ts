import {
  Component,
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductSizePage } from '../product-size/product-size';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-product-color',
  templateUrl: 'product-color.html',
  animations: [
    trigger('flyinPants', [
      state('out', style({
        left: '-250px'
      })),
      state('in', style({
        left: '151px'
      })),
      state('down', style({
        opacity: '0'
      })),
      transition('out=>in', [
        animate('0.5s 1.5s cubic-bezier(.67,1.28,.64,1.35)')
      ]),
      transition('in=>down', [
        animate('0.7s cubic-bezier(.67,1.28,.64,1.35)')
      ]),
    ]),
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
      ]),
    ]),
    trigger('Middle', [
      state('m', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('r', style({
        transform: 'rotate(45deg) translateY(-370px) rotate(-45deg)',
      })),
      state('l', style({
        transform: 'rotate(-45deg) translateY(-370px) rotate(45deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('Right', [
      state('m', style({
        transform: 'rotate(-45deg) translateY(-370px) rotate(45deg)',
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('l', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('Left', [
      state('m', style({
        transform: 'rotate(45deg) translateY(-370px) rotate(-45deg)',
      })),
      state('r', style({
        transform: 'rotate(90deg) translateY(-370px) rotate(-90deg)',
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ])
  ]
})
export class ProductColorPage {
  flyinState: string = 'out';
  roomState: string = "m";
  panXi: number = 0;
  panXo: number = 0;
  innerDefault = 136;
  outerDefault = 109;
  triggered: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
    this.panXi = this.innerDefault;
    this.panXo = this.outerDefault
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState)
    this.speak('원하시는 색상을 화면 오른쪽으로 스와이핑을 통해 선택 해주세요');
  }

  nextP() {
    this.flyinState = 'down';
    this.speak('진청이 선택되었어요');
    
    setTimeout(()=> {
      this.navCtrl.push(ProductSizePage, {}, { animate: false });
    },2000)
    
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


  moveButton(e) {
    console.log(this.triggered);
    console.log(this.roomState);
    if (e.deltaX >= 50 && this.triggered == false) {
      this.triggered = true;
      this.panXi = this.innerDefault;
      if (this.roomState == 'l'){
        this.roomState = 'm';
        this.speak(`블랙`);
      }
      else if (this.roomState == 'm'){
        this.roomState = 'r';
        this.speak(`진청`);
      }



    } else if (e.deltaX <= -50 && this.triggered == false) {
      this.triggered = true;
      this.panXi = this.innerDefault;
      if (this.roomState == 'r'){
        this.roomState = 'm';
        this.speak(`블랙`);
      }
      else if (this.roomState == 'm'){
        this.roomState = 'l';
        this.speak(`화이트`);
      }


    } else {
      this.panXi = this.innerDefault + e.deltaX;
      if (e.isFinal == true) {
        this.panXi = this.innerDefault;
        this.triggered = false;
      }
    }
  }
}
