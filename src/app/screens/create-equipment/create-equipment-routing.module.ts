import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEquipmentPage } from './create-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEquipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEquipmentPageRoutingModule {}
