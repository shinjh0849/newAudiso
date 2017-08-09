import {
  Component,
  trigger,
  transition,
  style,
  animate,
  group,
  state
} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanPage } from '../scan/scan';


@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
  animations: [
    trigger('flyin', [
      state('out', style({
        left: '-260px'
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
export class NavigationPage {
flyinState: string = "out";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState)
  }

  onDoubleTap(){
    this.flyinState = 'down';
    console.log('넘어갔어!');
    this.navCtrl.push(ScanPage, {}, { animate: false });
  }
}
