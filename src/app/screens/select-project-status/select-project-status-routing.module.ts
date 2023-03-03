import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectProjectStatusPage } from './select-project-status.page';

const routes: Routes = [
  {
    path: '',
    component: SelectProjectStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectProjectStatusPageRoutingModule {}
