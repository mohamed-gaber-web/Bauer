import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-scan-qrcode',
  templateUrl: './scan-qrcode.page.html',
  styleUrls: ['./scan-qrcode.page.scss'],
})
export class ScanQRCodePage  {

  scanActive: boolean = false;
  isModalOpen = false;

  constructor() {}

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
        alert(result.content); //The QR content will come out here
        //Handle the data as your heart desires here
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  confirm() {
    this.isModalOpen = false;
  }

}
