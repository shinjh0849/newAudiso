

import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecommendProductPage } from '../recommend-product/recommend-product';


@Component({
  selector: 'page-recommend-material',
  templateUrl: 'recommend-material.html',
  animations : [
    trigger('Middle', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
      })),
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),
    trigger('PinkMiddle', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity : 0
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity : 0
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity : 1
      })),
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        opacity : 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('BlueMiddle', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity : 0
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity : 1
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity : 0
      })),
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        opacity : 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('WhiteMiddle', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity : 1
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity : 0
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity : 0
      })),
      state('l2', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        opacity : 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

  trigger('Right', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
      })),
      state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('PinkRight', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 1
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('BlueRight', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('WhiteRight', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-370px) rotate(60deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-90deg) translateY(-370px) rotate(90deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('Left', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

     trigger('PinkLeft', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('BlueLeft', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 1
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),
  
    trigger('WhiteLeft', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      state('l2', style({
        transform: 'rotate(-30deg) translateY(-370px) rotate(30deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('Left2', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
      })),
      state('r', style({
        transform: 'rotate(120deg) translateY(-370px) rotate(-120deg)',
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),

    trigger('PinkLeft2', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(120deg) translateY(-370px) rotate(-120deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),
    trigger('BlueLeft2', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(120deg) translateY(-370px) rotate(-120deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 1
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 0
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ]),
    trigger('WhiteLeft2', [
      state('m', style({ 
        transform: 'rotate(60deg) translateY(-370px) rotate(-60deg)',
        opacity: 0
      })),
      state('r', style({
        transform: 'rotate(120deg) translateY(-370px) rotate(-120deg)',
        opacity: 0
      })),
      state('l', style({
        transform: 'rotate(30deg) translateY(-370px) rotate(-30deg)',
        opacity: 0
      })),
      state('l2', style({
        transform: 'rotate(0deg) translateY(-370px) rotate(0deg)',
        opacity: 1
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l<=>l2', [animate('0.3s')])
    ])
  ]
})
export class RecommendMaterialPage {
   roomState: string = "m";
   panXi: number = 0;
   panXo: number = 0;
   innerDefault = 136;
   outerDefault = 109;
   triggered: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
    this.panXi = this.innerDefault;
    this.panXo = this.outerDefault
  }
  
  nextP(){
    this.navCtrl.push(RecommendProductPage);
  }


  moveButton(e){
      console.log(this.triggered);
      console.log(this.roomState);
      if(e.deltaX >= 50 && this.triggered == false){
        this.triggered = true;
        this.panXi = this.innerDefault;
        if(this.roomState == 'l')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'r';
        else if(this.roomState == 'l2')
          this.roomState = 'l';

        
      } else if (e.deltaX <= -50 && this.triggered == false){
        this.triggered = true;
        this.panXi = this.innerDefault;
        if(this.roomState == 'r')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'l'; 
        else if(this.roomState == 'l')
          this.roomState = 'l2';
        
      } else {
        this.panXi = this.innerDefault + e.deltaX;
        if(e.isFinal == true){
          this.panXi = this.innerDefault;
          this.triggered = false;
        }
      }
  }
}
