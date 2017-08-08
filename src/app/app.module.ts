import { Tutorial2Page } from './../pages/tutorial2/tutorial2';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { RecommendPage } from './../pages/recommend/recommend';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DoubleTapDirective } from '../directives/double-tap/double-tap';
import { ShortPressDirective } from '../directives/short-press/short-press';
import { LongPressDirective } from '../directives/long-press/long-press';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SplashPage } from '../pages/splash/splash';
import { ProductSizePage } from '../pages/product-size/product-size';
import { ProductColorPage } from '../pages/product-color/product-color';
import { ProductConfirmPage } from '../pages/product-confirm/product-confirm';
import { RecommendColorPage } from '../pages/recommend-color/recommend-color';
import { RecommendMaterialPage } from '../pages/recommend-material/recommend-material';
import { RecommendPricePage } from '../pages/recommend-price/recommend-price';
import { RecommendProductPage } from '../pages/recommend-product/recommend-product';
import { NavigationPage } from '../pages/navigation/navigation';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { ScanPage } from '../pages/scan/scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { P1UpslidingDirective } from "../directives/p1-upsliding/p1-upsliding";
import { T4ToRightDirective } from "../directives/t4-to-right/t4-to-right";
import { P1Page } from "../pages/p1/p1";
import { TutorialPage } from "../pages/tutorial/tutorial";



@NgModule({
  declarations: [
    MyApp,
    HomePage,

    SplashPage,

    DoubleTapDirective,
    ShortPressDirective,
    LongPressDirective,
    P1UpslidingDirective,
    T4ToRightDirective,

    ProductColorPage,
    ProductConfirmPage,
    ProductSizePage,
    RecommendPage,
    RecommendColorPage,
    RecommendMaterialPage,
    RecommendPricePage,
    RecommendProductPage,
    NavigationPage,
    ScanPage,
    QRcodePage,
    P1Page,
    TutorialPage,
    Tutorial2Page

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    
    ProductColorPage,
    ProductConfirmPage,
    ProductSizePage,
    RecommendPage,
    RecommendColorPage,
    RecommendMaterialPage,
    RecommendPricePage,
    RecommendProductPage,
    NavigationPage,
    ScanPage,
    QRcodePage,
    P1Page,
    TutorialPage,
    Tutorial2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
