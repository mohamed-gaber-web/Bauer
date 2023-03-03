import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssueDetailsPageRoutingModule } from './issue-details-routing.module';

import { IssueDetailsPage } from './issue-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssueDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [IssueDetailsPage]
})
export class IssueDetailsPageModule {}
