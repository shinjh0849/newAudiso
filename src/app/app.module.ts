import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Plugin
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { NativeAudio } from '@ionic-native/native-audio';

//Directives
import { DoubleTapDirective } from '../directives/double-tap/double-tap';
import { ShortPressDirective } from '../directives/short-press/short-press';
import { LongPressDirective } from '../directives/long-press/long-press';
import { P1UpslidingDirective } from "../directives/p1-upsliding/p1-upsliding";
import { T4ToRightDirective } from "../directives/t4-to-right/t4-to-right";

//Pages
import { SplashPage } from '../pages/splash/splash';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tutorial2Page } from "../pages/tutorial2/tutorial2";
import { Tut2_1Page } from '../pages/tut2-1/tut2-1' 
import { Tut2_2Page } from '../pages/tut2-2/tut2-2' 
import { P1Page } from "../pages/p1/p1";
import { ProductSizePage } from '../pages/product-size/product-size';
import { ProductColorPage } from '../pages/product-color/product-color';
import { ProductConfirmPage } from '../pages/product-confirm/product-confirm';
import { RecommendPage } from './../pages/recommend/recommend';
import { RecommendColorPage } from '../pages/recommend-color/recommend-color';
import { RecommendMaterialPage } from '../pages/recommend-material/recommend-material';
import { RecommendPricePage } from '../pages/recommend-price/recommend-price';
import { RecommendProductPage } from '../pages/recommend-product/recommend-product';
import { NavigationPage } from '../pages/navigation/navigation';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { ScanPage } from '../pages/scan/scan';
import { Tut2_3Page } from "../pages/tut2-3/tut2-3";
import { Tut2_4Page } from "../pages/tut2-4/tut2-4";
import { Tut2_6Page } from "../pages/tut2-6/tut2-6";
import { Tut2_5Page } from "../pages/tut2-5/tut2-5";
import { T1Page } from "../pages/t1/t1";
import { T2Page } from "../pages/t2/t2";
import { T3Page } from "../pages/t3/t3";
import { T4Page } from "../pages/t4/t4";
import { T5Page } from "../pages/t5/t5";
import { P1_1Page } from "../pages/p1-1/p1-1";
import { P1_2Page } from "../pages/p1-2/p1-2";

import { StyleCheck1Page } from '../pages/style-check1/style-check1';
import { StyleCheck2Page } from '../pages/style-check2/style-check2';
import { StyleCheck3Page } from '../pages/style-check3/style-check3';
import { Payment1Page } from '../pages/payment1/payment1';
import { Payment2Page } from '../pages/payment2/payment2';
import { Payment3Page } from '../pages/payment3/payment3';
import { HistoryPage } from '../pages/history/history';
import { Navigation2Page } from '../pages/navigation2/navigation2';
import { FittingRoomPage } from '../pages/fitting-room/fitting-room';



@NgModule({
  declarations: [
    MyApp,
    
    //Directives
    DoubleTapDirective,
    ShortPressDirective,
    LongPressDirective,
    P1UpslidingDirective,
    T4ToRightDirective,

    //Pages
    SplashPage,
    HomePage,
    Tutorial2Page,
    Tut2_1Page,
    Tut2_2Page,
    Tut2_3Page,
    Tut2_4Page,
    Tut2_5Page,
    Tut2_6Page,
    P1Page,
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
    Tutorial2Page,
    T1Page,
    T2Page,
    T3Page,
    T4Page,
    T5Page,
    T5Page,
    P1_1Page,
    P1_2Page,
    
    FittingRoomPage,
    Navigation2Page,
    StyleCheck1Page,
    StyleCheck2Page,
    StyleCheck3Page,
    Payment1Page,
    Payment2Page,
    Payment3Page,
    HistoryPage


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    //Pages
    SplashPage,
    HomePage,
    Tutorial2Page,
    Tut2_1Page,
    Tut2_2Page,
    Tut2_3Page,
    Tut2_4Page,
    Tut2_5Page,
    Tut2_6Page,
    P1Page,
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
    Tutorial2Page,
    
    T1Page,
    T2Page,
    T3Page,
    T4Page,
    T5Page,
    T5Page,
    P1_1Page,
    P1_2Page,
  
    FittingRoomPage,
    Navigation2Page,
    StyleCheck1Page,
    StyleCheck2Page,
    StyleCheck3Page,
    Payment1Page,
    Payment2Page,
    Payment3Page,
    HistoryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFullScreen,
    NativeAudio,
    //Plugins
    TextToSpeech,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
