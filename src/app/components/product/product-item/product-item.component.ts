import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Product} from '../../../model/category/category.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    //this.router.navigate(['/auth/login']);
  }

}
