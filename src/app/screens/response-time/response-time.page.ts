import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-response-time',
  templateUrl: './response-time.page.html',
  styleUrls: ['./response-time.page.scss'],
})
export class ResponseTimePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Is the issue fixed ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          // cancel
          console.log('canceled');
        },
      },
      {
        text: 'Confrim',
        role: 'confirm',
        handler: () => {
          console.log('confirmed');
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  // this.roleMessage = `Dismissed with role: ${role}`;
  }

}
