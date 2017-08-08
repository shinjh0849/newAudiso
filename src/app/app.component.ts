import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Tutorial2Page } from '../pages/tutorial2/tutorial2'
import { SplashPage } from '../pages/splash/splash';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Tutorial2Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {

      let splash = modalCtrl.create(SplashPage);
      splash.present();

    });
  }
}

