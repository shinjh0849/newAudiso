import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { T1Page } from "../t1/t1";
import { T2Page } from "../t2/t2";

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
  animations: [
    trigger('upDown', [
      state('up', style({
        padding: '0',
        border: '0',
        left: '0px', 
        top: '-990px',
        width: '360px',
        height: '990.25px',
        })),
      state('down', style({
        padding: '0',
        border: '0',
        left: '0px', 
        top: '0px',
        width: '360px',
        height: '990.25px',
      })),
      transition('up => down', [
       animate('0.75s 0.5s ease-in')
       ])
    ]),
    trigger('fastDown', [
      state('up', style({
        padding: '0',
        border: '0',
        left: '110px',
        top: '286.85px',
        width: '140px',
        height: '122.4px'
        })),
    state('down', style({
      padding: '0',
      border: '0',
      left: '110px',
      top: '1000px',
      width: '140px',
      height: '122.4px'
    })),
      transition('up => down', [
       animate('0.001s 0.9s')
       ])
    ])
  ]
})


export class SplashPage {

  dropState: string = "up";
  fastState: string = "up";
 
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen, public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    console.log('splash active');
    this.dropState = (this.dropState === "up") ? "down" : "up";
    this.fastState = (this.fastState === "up") ? "down" : "up";
  }
 
  ionViewDidEnter() {
 
    //this.splashScreen.show();
 
    setTimeout(() => {
      //this.viewCtrl.dismiss();
      this.navCtrl.push(T2Page);
    }, 1500);
 
  }
 

  
}