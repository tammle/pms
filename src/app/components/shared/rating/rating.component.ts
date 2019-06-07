import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  @Input() rating: any;

  constructor() { }

  ngOnInit() {
  }

}
