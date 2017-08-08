import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanPage } from '../scan/scan';


@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  onDoubleTap(){
    console.log('넘어갔어!');
    this.navCtrl.push(ScanPage);
    
  }
}
