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
  max: number = 5;
  min: number = 1;
  one: boolean = false;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;
  five: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleCheck3Page');
    switch (this.getRandom()) {
      case 1: {
        this.one = true;
        break;
      }
      case 2: {
        this.two = true;
        break;
      }
      case 3: {
        this.three = true;
        break;
      }
      case 4: {
        this.four = true;
        break;
      }
      case 5: {
        this.five = true;
      }
    }

    this.flyinState = "in"; console.log('flyState: ' + this.flyinState);
  }

  nextP() {
    this.navCtrl.push(Payment1Page, {}, { animate: false });
  }

  getRandom() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}
