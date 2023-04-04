import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductData} from '../../assets/json/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData = new ProductData(); //
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.productData.productList;
  }
}
