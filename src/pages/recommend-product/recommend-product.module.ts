import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendProductPage } from './recommend-product';

@NgModule({
  declarations: [
    RecommendProductPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendProductPage),
  ],
})
export class RecommendProductPageModule {}
