import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEquipmentPageRoutingModule } from './create-equipment-routing.module';

import { CreateEquipmentPage } from './create-equipment.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEquipmentPageRoutingModule,
    SharedModule
  ],
  declarations: [CreateEquipmentPage]
})
export class CreateEquipmentPageModule {}
