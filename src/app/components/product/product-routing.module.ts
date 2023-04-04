import {ProductListComponent} from './product-list/product-list.component';
import {Routes} from '@angular/router';

export const ProductRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      // {
      //   path: 'list',
      //   component: ProductListComponent,
      // },
      // {
      //   path: 'all',
      //   component: ProductListComponent,
      // }
    ],
  },
];
