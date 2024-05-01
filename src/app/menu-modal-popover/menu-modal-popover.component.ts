import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, MenuController, ModalController, ModalOptions } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-menu-modal-popover',
  templateUrl: './menu-modal-popover.component.html',
  styleUrls: ['./menu-modal-popover.component.scss'],
})
export class MenuModalPopoverComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  currentModal: HTMLIonModalElement;

  constructor(public menucontroller: MenuController, public modalController: ModalController) { }

  ngOnInit() { }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

  openMenu() {
    this.menucontroller.open();
  }

}
