import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBreakdownPageRoutingModule } from './select-breakdown-routing.module';

import { SelectBreakdownPage } from './select-breakdown.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBreakdownPageRoutingModule,
    SharedModule
  ],
  declarations: [SelectBreakdownPage]
})
export class SelectBreakdownPageModule {}
