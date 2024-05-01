import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-range-reorder',
  templateUrl: './range-reorder.component.html',
  styleUrls: ['./range-reorder.component.scss'],
})
export class RangeReorderComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() { }

  pinFormatter(value: number) {
    return `${value}%`;
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    this.message = "Dragged from index " + ev.detail.from + " to " + ev.detail.to;

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
}
