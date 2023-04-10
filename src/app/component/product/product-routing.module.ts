import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProductItemComponent} from '../product/product-item/product-item.component';

const routes: Routes = [
  {
    path: 'product',
    children: [
      {path: '', component: ProductListComponent},
      {path: 'item', component: ProductItemComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
