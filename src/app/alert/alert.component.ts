import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'This is an alert',
      subHeader: 'AlertController is used.',
      message: 'The alertController can be used in situations where more control is needed over when the Alert is presented and dismissed.',
      buttons: ['Close'],
    });

    await alert.present();
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
