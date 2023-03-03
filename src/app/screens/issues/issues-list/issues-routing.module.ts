import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuesPage } from './issues.page';

import { IssuesResolver } from './../reolver/issue.resolver';

const routes: Routes = [
  {
    path: '',
    component: IssuesPage,
    resolve: {issue: IssuesResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesPageRoutingModule {}
