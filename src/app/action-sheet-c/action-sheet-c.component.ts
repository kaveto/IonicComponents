import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet-c',
  templateUrl: './action-sheet-c.component.html',
  styleUrls: ['./action-sheet-c.component.scss'],
})
export class ActionSheetCComponent implements OnInit {

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  constructor() { }

  ngOnInit() { }



  //Recolectar información al cerrarse la ventana de acciones

  logResult(ev?: any) {
    console.log(JSON.stringify(ev.detail, null, 2));
  }
}
