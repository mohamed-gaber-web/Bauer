import { Component } from '@angular/core';
import { Permissions } from '../shared/constants/permissions';

import { AuthService } from './../screens/auth/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userInfo: any;
  permissions = Permissions;


  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userInfo.subscribe(res => {
      this.userInfo = res;
    })
  }

}
