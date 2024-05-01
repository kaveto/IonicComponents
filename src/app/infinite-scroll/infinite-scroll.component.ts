import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {

  items: string[] = [];

  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      let sum = count + i;
      this.items.push(`Item ${sum}`);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
