import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { TextToSpeech } from '@ionic-native/text-to-speech';

//next page
import { QRcodePage } from '../q-rcode/q-rcode';


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  options: BarcodeScannerOptions;
  results: {};
  constructor(private tts: TextToSpeech, private barcode: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
    this.speak('QR코드를 확인하여 원하시는 옷을 확인해주세요.');
    this.scanQRcode();
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

  async scanQRcode(){
    this.options = {
      prompt : 'Scan a barcode to see the result'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
    this.speak(``);
    this.navCtrl.push(QRcodePage, {}, { animate: false });
  }

}
