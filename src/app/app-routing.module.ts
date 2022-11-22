import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { AuthGuard } from './guard/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  // {
  //   path: 'products',
  //   component: ProductListComponentComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'products/new',
  //   component: AddProductComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'products/:productId/details',
  //   component: DetailsProductComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'products/:productId/edit',
  //   component: EditProductComponent,
  //   canActivate: [AuthGuard],
  // },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
