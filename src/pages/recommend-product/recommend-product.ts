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
import { ProductColorPage } from '../product-color/product-color';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@Component({
  selector: 'page-recommend-product',
  templateUrl: 'recommend-product.html',
  animations: [
    trigger('appear', [
      state('off', style({
        opacity: 0
      })),
      state('on', style({
        opacity: 1
      })),
      transition('off=>on', [
        animate('0.1s 2.5s cubic-bezier(.67,1.28,.64,1.35)')
      ]),
    ]),
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
      ]),
    ]),
    trigger('Middle', [
      state('m', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('r', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
      })),
      state('l', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),
    trigger('PinkMiddle', [
      state('m', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('BlueMiddle', [
      state('m', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
        opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('WhiteMiddle', [
      state('m', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      state('r', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('Right', [
      state('m', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('l', style({
        transform: 'rotate(-71deg) translateY(-370px) rotate(71deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('PinkRight', [
      state('m', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
        opacity: 1
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-71deg) translateY(-370px) rotate(71deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('BlueRight', [
      state('m', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-71deg) translateY(-370px) rotate(71deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('WhiteRight', [
      state('m', style({
        transform: 'rotate(-35.5deg) translateY(-370px) rotate(35.5deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-71deg) translateY(-370px) rotate(71deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('Left', [
      state('m', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
      })),
      state('r', style({
        transform: 'rotate(71deg) translateY(-370px) rotate(-71deg)',
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('PinkLeft', [
      state('m', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(71deg) translateY(-370px) rotate(-71deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('BlueLeft', [
      state('m', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
        opacity: 1
      })),
      state('r', style({
        transform: 'rotate(71deg) translateY(-370px) rotate(-71deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('WhiteLeft', [
      state('m', style({
        transform: 'rotate(35.5deg) translateY(-370px) rotate(-35.5deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(71deg) translateY(-370px) rotate(-71deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ])
  ]
})
export class RecommendProductPage {
  appearState: string = 'off';
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
    this.appearState = 'on';
    this.speak('5건의 추천 상품을 찾았어요. \
    첫번째 추천된 상품입니다. 상품을 확인해 보시려면 탭 한 번을 해주세요. \
    다음 추천 상품을 확인해 보시려면 오른쪽으로 슬라이딩해주세요.');
  }

  nextP() {
    this.flyinState = 'down';
    this.speak('여성 울트라스트레치진 A 사만구천구백원이 선택되었습니다.\
    간단한 상품설명을 듣고 싶으시면 탭 한 번을 \
    스킵하시려면 화면을 아래로 슬라이딩를해주세요.')
    this.navCtrl.push(ProductColorPage, {}, { animate: false });
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
      if (this.roomState == 'l')
        this.roomState = 'm';
      else if (this.roomState == 'm')
        this.roomState = 'r';



    } else if (e.deltaX <= -50 && this.triggered == false) {
      this.triggered = true;
      this.panXi = this.innerDefault;
      if (this.roomState == 'r')
        this.roomState = 'm';
      else if (this.roomState == 'm')
        this.roomState = 'l';


    } else {
      this.panXi = this.innerDefault + e.deltaX;
      if (e.isFinal == true) {
        this.panXi = this.innerDefault;
        this.triggered = false;
      }
    }
  }
}
