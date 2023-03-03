import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectProjectStatusPageRoutingModule } from './select-project-status-routing.module';

import { SelectProjectStatusPage } from './select-project-status.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectProjectStatusPageRoutingModule,
    SharedModule
  ],
  declarations: [SelectProjectStatusPage]
})
export class SelectProjectStatusPageModule {}
