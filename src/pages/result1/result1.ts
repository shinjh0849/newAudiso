import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FittingRoomPage } from "../fitting-room/fitting-room";

@Component({
  selector: 'page-result1',
  templateUrl: 'result1.html',
})
export class Result1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result1Page');
  }
  
  clickEvent(){
    this.navCtrl.push(FittingRoomPage, {}, { animate: false });
  }

}
