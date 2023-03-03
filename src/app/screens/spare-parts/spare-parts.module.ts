import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SparePartsPageRoutingModule } from './spare-parts-routing.module';

import { SparePartsPage } from './spare-parts.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SparePartsPageRoutingModule,
    SharedModule
  ],
  declarations: [SparePartsPage]
})
export class SparePartsPageModule {}
