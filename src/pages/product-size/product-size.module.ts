import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductSizePage } from './product-size';

@NgModule({
  declarations: [
    ProductSizePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductSizePage),
  ],
})
export class ProductSizePageModule {}
