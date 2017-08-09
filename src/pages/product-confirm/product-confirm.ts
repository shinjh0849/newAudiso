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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductConfirmPage');
    this.flyinState = "in"; console.log('flyState: ' + this.flyinState)
  }


  nextP() {
    this.flyinState = 'down';
    this.navCtrl.push(NavigationPage, {}, { animate: false });
  }
}
