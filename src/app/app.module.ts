import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Plugin
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
import { TutorialPage } from "../pages/tutorial/tutorial";
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
    TutorialPage,
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
    QRcodePage

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
    TutorialPage,
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
    QRcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    //Plugins
    TextToSpeech,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
