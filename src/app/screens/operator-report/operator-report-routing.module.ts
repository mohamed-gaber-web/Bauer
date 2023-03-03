import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorReportPage } from './operator-report.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorReportPageRoutingModule {}
