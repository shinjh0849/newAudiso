import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendMaterialPage } from './recommend-material';

@NgModule({
  declarations: [
    RecommendMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendMaterialPage),
  ],
})
export class RecommendMaterialPageModule {}
