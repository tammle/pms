import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { fromEvent, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  productItems: any;
  productItems$: Observable<any>;
  shouldShowImage: boolean = true;

  constructor(private productDataService: ProductDataService) {}

  ngOnInit() {
    this.productItems$ = this.productDataService.getProductList();
    this.productItems$.subscribe((productItems) => this.productItems = productItems);
  }
  ngAfterViewInit() {
    const filterInput = document.getElementById('product-filter');
    const onInputChanged$ = combineLatest(
      fromEvent(filterInput, 'input').pipe(
        map(event => event.target['value'])
      ),
      this.productItems$
    );

    onInputChanged$.subscribe(([text, products]) => {
      this.productItems = products.filter(item => item['name'].toLowerCase().includes(text))
    })
  }

  toggleImage() {
    this.shouldShowImage = !this.shouldShowImage;
  }
}
