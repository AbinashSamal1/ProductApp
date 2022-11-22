import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css'],
})
export class DetailsProductComponent implements OnInit {

  productList:any| undefined;

  constructor(private routes: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.getProductDetailsById(params['productId']);
    });
  }
  getProductDetailsById(productId: number) {
    this.api
      .viewProduct(productId)
      .subscribe((data: Product[]) => {
        this.productList = data;
      });
  }
}