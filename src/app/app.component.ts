import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/services/storage.service';

import { Permissions } from './shared/constants/permissions';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentLang!: string;
  user: any;
  permissions = Permissions;

  constructor(
    public translate: TranslateService,
    private storageService: StorageService,
    private router: Router,
    ) {

    this.currentLang = localStorage.getItem('currentLang') || 'en-US';
    this.translate.use(this.currentLang);
    // document.documentElement.lang = this.currentLang;
    // get role when sign in

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(!localStorage.getItem('currentLang')) {
      localStorage.setItem('currentLang', 'en-US');
    }
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  // Lang Direction rtl and ltr
 getLangDirection() {
    if (this.storageService.existsStorage('currentLang')) {
      if (this.storageService.getStorage('currentLang')  === 'en-US') return true;
    }
    return false;
  }

  logout() {
    this.storageService.removeStorage('access_token');
    this.storageService.removeStorage('user');
    this.router.navigate(['/'])
  }

}
