import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  ionicForm: FormGroup;
  isToastOpen = false;

  constructor(public alertController: AlertController, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() { }

  async processForm(event: any) {
    event.preventDefault();
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value)
      const alert = await this.alertController.create({
        header: 'Account Created',
        message: `Created account for: ${this.ionicForm.value.firstName} ${this.ionicForm.value.lastName}`,
        buttons: [{
          text: 'OK'
        }]
      })

      alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Account not Created',
        message: `values are required and minLeght of 3 digits for each field.`,
        buttons: [{
          text: 'OK'
        }]
      })

      alert.present();
    }



  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }


}

