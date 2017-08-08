import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductSizePage } from '../product-size/product-size';


@Component({
  selector: 'page-product-color',
  templateUrl: 'product-color.html',
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
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
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
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
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
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ])
  ]
})
export class ProductColorPage {
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
    this.navCtrl.push(ProductSizePage);
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


        
      } else if (e.deltaX <= -50 && this.triggered == false){
        this.triggered = true;
        this.panXi = this.innerDefault;
        if(this.roomState == 'r')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'l'; 

        
      } else {
        this.panXi = this.innerDefault + e.deltaX;
        if(e.isFinal == true){
          this.panXi = this.innerDefault;
          this.triggered = false;
        }
      }
  }
}
