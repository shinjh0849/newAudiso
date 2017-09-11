import { TextToSpeech } from '@ionic-native/text-to-speech';
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
import { Payment1Page } from '../payment1/payment1';


@Component({
  selector: 'page-style-check3',
  templateUrl: 'style-check3.html',
  animations: [
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
    ])
  ]
})
export class StyleCheck3Page {
  flyinState: string = "out";
  max: number = 5;
  min: number = 1;
  one: boolean = false;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;
  five: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleCheck3Page');
    switch (this.getRandom()) {
      case 1: {
        this.one = true;
        this.speak(`아 제.. 제가 도와드릴게요! 옷보다는 옷걸이가 중요하죠…! 
        유니가 드리는 별은 한 개! 몇가지 추천해드릴테니 참고해주세요. 울트라스트레치진A은 
        레이온블라우스와도 잘 어울리는데 코디 해 보시면 어떨까요?
        다 고르셨군요! 그럼 이제 저와 결제대로 이동해보아요~!`);
        break;
      }
      case 2: {
        this.two = true;
        this.speak(`약간 호불호가 갈릴 것 같네요. 다른 옷을 입어보는 건 어떨까요? 유니가 드리는 별은 2개! 
        지금 입고 계신 울트라스트레치진A랑 입고 계신 셔츠 A와 잘 어울려요! 
        울트라스트레치진A은 레이온블라우스와도 잘 어울리는데 코디 해 보시면 어떨까요?
        다 고르셨군요! 그럼 이제 저와 결제대로 이동해보아요~!`)
        break;
      }
      case 3: {
        this.three = true;
        this.speak(`고객님! 패션을 좀 아시네요! 유니가 드리는 별은 세 개!  
        지금 입고 계신 울트라스트레치진A랑 입고 계신 셔츠 A와 잘 어울려요! 
        울트라스트레치진A은 레이온블라우스와도 잘 어울리는데 코디 해 보시면 어떨까요?
        다 고르셨군요! 그럼 이제 저와 결제대로 이동해보아요~!`);
        break;
      }
      case 4: {
        this.four = true;
        this.speak(`코디를 잘 하셨네요. 유니가 드리는 코디점수는 별 4개! 지금 입고 
        계신 울트라스트리티진A랑 입고 계신 셔츠 A와 잘 어울려요! 울트라스트레치진 A는 
        레이온블라우스(긴팔)17SP와도 잘 어울리는데 코디 해 보시면 어떨까요? 
        다 고르셨군요! 그럼 이제 저와 결제대로 이동해보아요~!`);
        break;
      }
      case 5: {
        this.five = true;
        this.speak(`당신은 패션왕! 정말 코디를 잘하셨네요! 유니가 드리는 코디점수는 별 5개! 
        지금 입고 계신 울트라스트레치진A이 고객님의 피부톤과 정말 잘 어울려요!
        울트라스트레치진 A는A 레이온블라우스와도 잘 어울리는데 코디 해 보시면 어떨까요?
        다 고르셨군요! 그럼 이제 저와 결제대로 이동해보아요~!`);
      }
    }
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
  }

  nextP() {
    //this.navCtrl.push(Payment1Page, {}, { animate: false });
    //this.speak(`다 고르셨군요! 그럼 이제 저와 결제대로 이동해보아요~!`);
  }

  getRandom() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  async speak(line): Promise<any> {
    try {
      await this.tts.speak({
        text: line,
        locale: 'ko-KR',
        rate: 1
      });
      console.log('speak function start!');
    }
    catch (e) {
      console.log(e);
    }
  }
}
