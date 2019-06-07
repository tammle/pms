import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<any>  {
    return this.http.get('assets/products.json');
  }
  getProductDetail(id: string) {
    // TODO: redundant re-fetch data, define another API to retrieve product detail
    return this.getProductList().pipe(
      map(products => products.find(product => product['id'] === id))
    );
  }
}
