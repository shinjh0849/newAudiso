import { T3Page } from './../pages/t3/t3';
import { T2Page } from './../pages/t2/t2';

import { T1Page } from './../pages/t1/t1';
import { HistoryPage } from './../pages/history/history';
import { StyleCheck1Page } from './../pages/style-check1/style-check1';
import { RecommendColorPage } from './../pages/recommend-color/recommend-color';
import { RecommendPage } from './../pages/recommend/recommend';
import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';
import { P1Page } from "../pages/p1/p1";
import { Tutorial2Page } from "../pages/tutorial2/tutorial2";
import { Tut2_6Page } from "../pages/tut2-6/tut2-6";

import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { NavigationPage } from '../pages/navigation/navigation';
import { RecommendMaterialPage } from '../pages/recommend-material/recommend-material';
import { FittingRoomPage } from '../pages/fitting-room/fitting-room';
import { Navigation2Page } from '../pages/navigation2/navigation2';
import { Payment1Page } from '../pages/payment1/payment1';
import { Payment2Page } from '../pages/payment2/payment2';
import { Payment3Page } from '../pages/payment3/payment3';
import { ProductColorPage } from '../pages/product-color/product-color';
import { ProductConfirmPage } from '../pages/product-confirm/product-confirm';
import { Tut2_4Page } from "../pages/tut2-4/tut2-4";
<<<<<<< HEAD

import { Tut2_1Page } from "../pages/tut2-1/tut2-1";
import { Result1Page } from "../pages/result1/result1";
=======
import { RecommendProductPage } from '../pages/recommend-product/recommend-product';
import { ProductSizePage } from '../pages/product-size/product-size';
import { StyleCheck2Page } from '../pages/style-check2/style-check2';
import { StyleCheck3Page } from '../pages/style-check3/style-check3';

>>>>>>> JihoShin

// T1Page 에서 시작해야 한다.


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = ProductConfirmPage;

=======
  rootPage:any = RecommendPage;
  
>>>>>>> JihoShin

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController/*, private androidFullScreen: AndroidFullScreen*/ ) {
    platform.ready().then(() => {

      //let splash = modalCtrl.create(SplashPage);
      //splash.present();
      statusBar.hide(); // statusBar hide 해볼까 말까
      //splash.present();
      //this.androidFullScreen.isImmersiveModeSupported()
      //.then(() => this.androidFullScreen.immersiveMode())
      //.catch((error: any) => console.log(error));

    });
  }
}

