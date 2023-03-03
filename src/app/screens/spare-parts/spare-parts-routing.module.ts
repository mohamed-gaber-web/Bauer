import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SparePartsPage } from './spare-parts.page';

const routes: Routes = [
  {
    path: '',
    component: SparePartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SparePartsPageRoutingModule {}
