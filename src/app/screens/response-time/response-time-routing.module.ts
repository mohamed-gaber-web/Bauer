import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponseTimePage } from './response-time.page';

const routes: Routes = [
  {
    path: '',
    component: ResponseTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponseTimePageRoutingModule {}
