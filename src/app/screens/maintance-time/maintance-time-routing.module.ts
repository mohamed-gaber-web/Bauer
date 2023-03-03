import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintanceTimePage } from './maintance-time.page';

const routes: Routes = [
  {
    path: '',
    component: MaintanceTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintanceTimePageRoutingModule {}
