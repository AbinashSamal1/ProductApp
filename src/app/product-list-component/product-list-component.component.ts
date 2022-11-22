import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css'],
})
@Injectable({
  providedIn: 'root'
})
export class ProductListComponentComponent implements OnInit {
  pageNum: number = 1;
  productList: Product[] = [];
  display: boolean = true;

  constructor(private api: ApiService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.getProd();
  }
  getProd() {
    this.api.getProduct(this.pageNum).subscribe((res) => {
      this.productList = res;
    });
  }

  loadMore() {
    this.pageNum += 1;
    this.api.getProduct(this.pageNum).subscribe((res) => {
      // console.log(res.length);
      console.log(res.length);
      if (res.length != 0) {
        this.productList = this.productList.concat(res);
      } else {
        this.display = false;
      }
    });
  }

  onDeleteProduct(productId: number, productName: string) {
    if (confirm('Are you sure you want to delete' + ' ' + productName + '?')) {
      this.api.deleteProduct(productId, productName).subscribe((res) => {
        this.getProd();
        this.toast.error(productName + 'has been deleted');
      });
    }
  }

  onReactiveProduct(productId: number, productName: string) {
    if (
      confirm(
        'Do you really want to activate this product' + ' ' + productName + '?'
      )
    ) {
      this.api.reactiveProduct(productId).subscribe((res) => {
        this.getProd();
        this.toast.success(productName + ' ' + 'Activated');
      });
    }
  }

  onDeactivateProduct(productId: number, productName: string) {
    if (
      confirm('Do you really want to De-Activate' + ' ' + productName + '?')
    ) {
      this.api.deactivateProduct(productId, productName).subscribe((res) => {
        this.getProd();
        this.toast.error(productName + ' ' + 'De-Activated');
      });
    }
  }

}
