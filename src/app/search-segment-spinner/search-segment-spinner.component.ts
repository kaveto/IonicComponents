import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-segment-spinner',
  templateUrl: './search-segment-spinner.component.html',
  styleUrls: ['./search-segment-spinner.component.scss'],
})
export class SearchSegmentSpinnerComponent implements OnInit {

  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  constructor() { }

  ngOnInit() { }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

}
