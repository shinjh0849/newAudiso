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
import { HistoryPage } from '../history/history';


@Component({
  selector: 'page-payment3',
  templateUrl: 'payment3.html',
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
export class Payment3Page {
  flyinState: string = "out";
  max: number = 7;
  min: number = 1;
  constructor(public navCtrl: NavController, public tts: TextToSpeech, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payment3Page');
    switch (this.getRandom()) {
      case 1: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
              옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
지혜님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
      case 2: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
지호님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
      case 3: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
은지님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
      case 4: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
              옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
혁기님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
      case 5: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
민경님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
      case 6: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
소리님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
      case 7: {
        this.speak(`영수증에 인쇄된 QR코드를 통해 결제정보 확인이 가능하고
옷 태그의 QR코드를 통해 언제든 옷의 상세정보를 알 수 있어요. 
다음에 또 봐요. 
은주님, 오늘도 저와 함께 쇼핑을 해주어 정말 기뻐요! 
`);
        break;
      }
    }

        this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
    }

    nextP() {
      this.navCtrl.push(HistoryPage, {}, { animate: false });
    }

    getRandom() {
      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    async speak(line): Promise < any > {
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
