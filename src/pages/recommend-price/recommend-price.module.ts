import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendPricePage } from './recommend-price';

@NgModule({
  declarations: [
    RecommendPricePage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendPricePage),
  ],
})
export class RecommendPricePageModule {}
