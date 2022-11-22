import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DetailsProductComponent } from './details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    EditProductComponent,
    AddProductComponent,
    ProductNavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    DetailsProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({}),
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
