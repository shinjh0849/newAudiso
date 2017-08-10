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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleCheck3Page');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
  }

  nextP() {
    this.navCtrl.push(Payment1Page, {}, { animate: false });
  }

}
