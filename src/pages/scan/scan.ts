import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

//next page
import { QRcodePage } from '../q-rcode/q-rcode';


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  options: BarcodeScannerOptions;
  results: {};
  constructor(private barcode: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
    this.scanQRcode();
  }

  async scanQRcode(){
    this.options = {
      prompt : 'Scan a barcode to see the result!'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
    this.navCtrl.push(QRcodePage, {}, { animate: false });
  }

}
