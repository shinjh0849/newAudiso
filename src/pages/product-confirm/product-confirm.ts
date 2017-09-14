import { NavController, NavParams } from 'ionic-angular';
import { NavigationPage } from '../navigation/navigation';
import {
  Component,
  trigger,
  transition,
  style,
  animate,
  group,
  state
} from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-product-confirm',
  templateUrl: 'product-confirm.html',
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
    ]),
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
      ])
    ])
  ]
})

export class ProductConfirmPage {
  flyinState: string = "out";
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductConfirmPage');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState)
    this.speak(`49900원, 진청, 26인치
여성 울트라 스트레치진 A가 선택되었어요. 상품을 찾으러 가시려면 탭 한번을, 
위시리스트에 넣고 싶으시면 아래로 화면 슬라이딩를 해주세요`)
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
      console.log(e);
    }
  }

  nextP() {
    this.flyinState = 'down';
    this.speak('울트라스트레치진 A를 같이 찾으러 가볼게요. 3블럭 앞에서 왼쪽으로 회전 후, 왼쪽 매대에 상품이 비치되어 있어요~! 그럼 가볼까요?')
    
    setTimeout(()=> {
      this.navCtrl.push(NavigationPage, {}, { animate: false });
    },12000)
    
  }
}
