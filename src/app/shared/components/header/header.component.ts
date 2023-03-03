import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

    back() {
    if(this.currentRoute === 'screens/reports') {
      return;
    }
    this.navCtrl.back();
  }

  notifications() {
    this.navCtrl.navigateRoot('notifications')
  }

}
