import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ratingValidator } from 'src/shared/rating.validator';
import { Product } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  formValue!: FormGroup;
  productObj: any;

  constructor(
    private formBuilder: FormBuilder,
    private url: ApiService,
    private toastr: ToastrService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: [
        '',
        [
          Validators.required,
          RxwebValidators.numeric({ allowDecimal: true, isFormat: true }),
        ],
      ],
      rating: ['', [Validators.required, ratingValidator]],
      releasedate: ['', Validators.required],
      imageUrl: '',
    });
  }
  addProductDetails() {
    let productObj: Product = {
      productName: this.formValue.value.productName,
      description: this.formValue.value.description,
      price: this.formValue.value.price,
      rating: this.formValue.value.rating,
      releaseDate: this.formValue.value.releaseDate,
      imageUrl: this.formValue.value.imageUrl,
      productId: 0,
      createdDate: '',
      lastUpdatedDate: '',
      isActive: false,
    };

    this.url.addProduct(productObj).subscribe((res) => {
      console.log(res);
      this.toastr.success('Product Added Successfully');
      this.formValue.reset();
      this.route.navigate(['products'])
    });
  }
  get productName(): FormControl {
    return this.formValue.get('productName') as FormControl;
  }
  get description(): FormControl {
    return this.formValue.get('description') as FormControl;
  }
  get price(): FormControl {
    return this.formValue.get('price') as FormControl;
  }
  get rating(): FormControl {
    return this.formValue.get('rating') as FormControl;
  }
  get releasedate(): FormControl {
    return this.formValue.get('releasedate') as FormControl;
  }
  get imageUrl(): FormControl {
    return this.formValue.get('imageUrl') as FormControl;
  }
}
