import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductColorPage } from './product-color';

@NgModule({
  declarations: [
    ProductColorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductColorPage),
  ],
})
export class ProductColorPageModule {}
