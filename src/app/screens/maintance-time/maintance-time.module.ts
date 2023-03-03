import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintanceTimePageRoutingModule } from './maintance-time-routing.module';

import { MaintanceTimePage } from './maintance-time.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintanceTimePageRoutingModule,
    SharedModule
  ],
  declarations: [MaintanceTimePage]
})
export class MaintanceTimePageModule {}
