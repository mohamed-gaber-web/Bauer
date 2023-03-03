import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToasterServive {

  constructor(private toastController: ToastController) {}

  async success(position: any, message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: position,
      icon: 'checkmark-outline',
      cssClass: 'custom-success',
    });

    await toast.present();
  }

  async error(position: any, message: string) {
      const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: position,
      icon: 'close-outline',
      cssClass: 'custom-error',
    });

    await toast.present();
  }
}
