import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { user } from '../models/user.model';
import { ProductListComponentComponent } from '../product-list-component/product-list-component.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://www.dummyproducts.com/api/Products/';
  api: string = 'http://www.dummyproducts.com/api/Products/';

  constructor(private http: HttpClient) {}

  getProduct(pageNumber: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://www.dummyproducts.com/api/Products?rowsPerPage=10&pageNumber=' +
        pageNumber
    );
  }
  deleteProduct(productId: number, data: any) {
    return this.http
      .delete<any>('http://www.dummyproducts.com/api/Products/' + productId)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  reactiveProduct(productId: number) {
    return this.http.post(this.api + productId + '/reactivate', {});
  }
  deactivateProduct(productId: number, data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.api + productId + '/deactivate', {});
  }
  viewProduct(productId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + productId);
  }
  addProduct(data: Product) {
    let obj = {
      productName: data.productName,
      description: data.description,
      releaseDate: data.releaseDate,
      price: data.price,
      rating: data.rating,
      imageUrl: data.imageUrl,
    };
    return this.http.post<Product[]>(this.url, obj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getData(productId: number) {
    return this.http.get(this.api + productId);
  }
  updateProd(productId: number, data: any) {
    return this.http.put(this.api + productId, data);
  }
  getLData() {}

  addUser(data: user[]) {
    return this.http
      .post<user[]>('http://www.dummyproducts.com/api/register', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  
}
