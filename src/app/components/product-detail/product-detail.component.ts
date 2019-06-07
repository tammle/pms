import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: any; // TODO: define correct type, should not use any
  productDetail$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productDetail$ = this.productDataService.getProductDetail(productId);
    this.productDetail$.subscribe((productDetail) => this.productDetail = productDetail);
  }
}
