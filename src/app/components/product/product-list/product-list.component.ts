import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductService} from "../../../service/product-service.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterModule,
    ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit{

  productList: any[] | undefined;
  constructor(private productService : ProductService) { }
  ngOnInit(): void {
    this.productList = this.productService.getProduct();
  }
}

