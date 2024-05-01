import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.scss'],
})
export class FloatingActionButtonComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  name: string | undefined;

  constructor() { }

  ngOnInit() { }
  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
}
