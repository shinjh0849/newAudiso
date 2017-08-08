import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendConfirmPage } from './recommend-confirm';

@NgModule({
  declarations: [
    RecommendConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendConfirmPage),
  ],
})
export class RecommendConfirmPageModule {}
