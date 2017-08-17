import { RecommendColorPage } from './../pages/recommend-color/recommend-color';
import { RecommendPage } from './../pages/recommend/recommend';
import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';
import { P1Page } from "../pages/p1/p1";
import { TutorialPage } from '../pages/tutorial/tutorial';
import { Tutorial2Page } from "../pages/tutorial2/tutorial2";
import { Tut2_6Page } from "../pages/tut2-6/tut2-6";

import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { NavigationPage } from '../pages/navigation/navigation';
import { RecommendMaterialPage } from '../pages/recommend-material/recommend-material';
// T1Page 에서 시작해야 한다.
import { T1Page } from "../pages/t1/t1";
import { StyleCheck1Page } from '../pages/style-check1/style-check1';
import { Tut2_1Page } from "../pages/tut2-1/tut2-1";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Tut2_1Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {

      let splash = modalCtrl.create(SplashPage);
      splash.present();

    });
  }
}

