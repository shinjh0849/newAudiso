import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FittingRoomPage } from "../fitting-room/fitting-room";
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the Result2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result2',
  templateUrl: 'result2.html',
})
export class Result2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result2Page');
    this.speak(`이 옷은 supima cotton V넥 반팔, 흰색 S 에요, 지금 확인하신 옷 아래쪽 옷을 확인해보세요!`);
  }

  clickEvent(){
    this.navCtrl.push(FittingRoomPage, {}, { animate: false });
  }
  

      async speak(line): Promise<any>{
    try{
      await this.tts.speak({
        text: line,
        locale: 'ko-KR',
        rate: 1
      });
      console.log('speak function start!');
    }
    catch(e){
      console.log(e);
    }
  }
}
