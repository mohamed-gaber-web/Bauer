import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorReportPageRoutingModule } from './operator-report-routing.module';

import { OperatorReportPage } from './operator-report.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorReportPageRoutingModule,
    SharedModule
  ],
  declarations: [OperatorReportPage]
})
export class OperatorReportPageModule {}
