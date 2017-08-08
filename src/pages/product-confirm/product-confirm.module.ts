import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductConfirmPage } from './product-confirm';

@NgModule({
  declarations: [
    ProductConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductConfirmPage),
  ],
})
export class ProductConfirmPageModule {}
