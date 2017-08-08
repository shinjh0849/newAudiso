import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';

import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { NavigationPage } from '../pages/navigation/navigation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = NavigationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {

      let splash = modalCtrl.create(SplashPage);
      splash.present();

    });
  }
}

