import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponseTimePageRoutingModule } from './response-time-routing.module';

import { ResponseTimePage } from './response-time.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponseTimePageRoutingModule,
    SharedModule
  ],
  declarations: [ResponseTimePage]
})
export class ResponseTimePageModule {}
