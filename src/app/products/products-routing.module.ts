import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { DetailsProductComponent } from '../details-product/details-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AuthGuard } from '../guard/auth.guard';
import { ProductListComponentComponent } from '../product-list-component/product-list-component.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductListComponentComponent },
  {
    path: 'new',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':productId/details',
    component: DetailsProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':productId/edit',
    component: EditProductComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
