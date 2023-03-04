import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'screens',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./screens/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'create-equipment',
    loadChildren: () => import('./screens/create-equipment/create-equipment.module').then( m => m.CreateEquipmentPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./screens/issues/issues-list/issues.module').then( m => m.IssuesPageModule)
  },
  {
    path: 'issue-details/:issueId',
    loadChildren: () => import('./screens/issues/issue-details/issue-details.module').then( m => m.IssueDetailsPageModule)
  },
  {
    path: 'actions/:issueId',
    loadChildren: () => import('./screens/actions/actions.module').then( m => m.ActionsPageModule)
  },
  {
    path: 'spare-parts',
    loadChildren: () => import('./screens/spare-parts/spare-parts.module').then( m => m.SparePartsPageModule)
  },
  {
    path: 'select-project',
    loadChildren: () => import('./screens/select-project/select-project.module').then( m => m.SelectProjectPageModule)
  },
  {
    path: 'scan-qrcode',
    loadChildren: () => import('./screens/scan-qrcode/scan-qrcode.module').then( m => m.ScanQRCodePageModule)
  },
  {
    path: 'select-breakdown',
    loadChildren: () => import('./screens/select-breakdown/select-breakdown.module').then( m => m.SelectBreakdownPageModule)
  },
  {
    path: 'project-details',
    loadChildren: () => import('./screens/project-details/project-details.module').then( m => m.ProjectDetailsPageModule)
  },
  {
    path: 'select-project-status',
    loadChildren: () => import('./screens/select-project-status/select-project-status.module').then( m => m.SelectProjectStatusPageModule)
  },
  {
    path: 'response-time',
    loadChildren: () => import('./screens/response-time/response-time.module').then( m => m.ResponseTimePageModule)
  },
  {
    path: 'maintance-time',
    loadChildren: () => import('./screens/maintance-time/maintance-time.module').then( m => m.MaintanceTimePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
