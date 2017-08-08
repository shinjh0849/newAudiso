import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavigationPage } from '../navigation/navigation';

@Component({
  selector: 'page-product-confirm',
  templateUrl: 'product-confirm.html',
})
export class ProductConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductConfirmPage');
  }


    nextP(){
    this.navCtrl.push(NavigationPage);
  }

}
