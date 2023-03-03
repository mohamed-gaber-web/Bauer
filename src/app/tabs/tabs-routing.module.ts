import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'issues',
        loadChildren:  () => import('../screens/issues/issues-list/issues.module').then(m => m.IssuesPageModule)
      },
      {
        path: 'scan',
        loadChildren: () => import("../screens/scan-qrcode/scan-qrcode.module").then(m => m.ScanQRCodePageModule)
      }
      // {
      //   path: '',
      //   redirectTo: '/tabs/tab1',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
