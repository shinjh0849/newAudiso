import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { TextToSpeech } from '@ionic-native/text-to-speech';

//next page
import { QRcodePage } from '../q-rcode/q-rcode';
import { Result1Page } from '../result1/result1';
import { Result2Page } from '../result2/result2';


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  str: string;
  options: BarcodeScannerOptions;
  results: any;
  constructor(private tts: TextToSpeech, private barcode: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
    this.speak('QR코드를 확인하여 원하시는 옷을 확인해주세요.');
    this.scanQRcode();
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

  async scanQRcode() {
    this.options = {
      prompt: 'Scan a barcode to see the result'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
    this.speak(``);
    this.str = this.results.text

    if (this.str == 'yes')
      this.navCtrl.push(Result1Page, {}, { animate: false });
    else
      this.navCtrl.push(Result2Page, {}, { animate: false });
  }

  clickevent() {
    this.navCtrl.push(QRcodePage, {}, { animate: false });
  }


}
