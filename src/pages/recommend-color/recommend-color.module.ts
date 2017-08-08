import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendColorPage } from './recommend-color';

@NgModule({
  declarations: [
    RecommendColorPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendColorPage),
  ],
})
export class RecommendColorPageModule {}
