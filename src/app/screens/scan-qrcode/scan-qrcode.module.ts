import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanQRCodePageRoutingModule } from './scan-qrcode-routing.module';

import { ScanQRCodePage } from './scan-qrcode.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQRCodePageRoutingModule,
    SharedModule
  ],
  declarations: [ScanQRCodePage]
})
export class ScanQRCodePageModule {}
