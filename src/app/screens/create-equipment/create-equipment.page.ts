import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.page.html',
  styleUrls: ['./create-equipment.page.scss'],
})

export class CreateEquipmentPage implements OnInit {

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
