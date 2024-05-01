import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  @ViewChild('popover') popover: any;

  isOpen = false;
  collapsedBreadcrumbs: HTMLIonBreadcrumbElement[] = [];

  maxBreadcrumbs: any = 4;
  constructor() { }

  ngOnInit() { }

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }

  async presentPopover(e: Event) {
    this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
    this.popover.event = e;
    this.isOpen = true;
  }
}
