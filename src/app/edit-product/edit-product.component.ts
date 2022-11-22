import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ratingValidator } from 'src/shared/rating.validator';
import { ToastrService } from 'ngx-toastr';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  alert: boolean = false;

  editProduct = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      RxwebValidators.numeric({ allowDecimal: true, isFormat: true }),
    ]),
    rating: new FormControl('', [Validators.required, ratingValidator]),
    imageUrl: new FormControl('', [Validators.required]),
  });
  constructor(
    private api: ApiService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params.productId);
    this.api
      .getData(this.router.snapshot.params.productId)
      .subscribe((result: any) => {
        this.editProduct.controls['productName'].setValue(result.productName);
        this.editProduct.controls['description'].setValue(result.description);
        this.editProduct.controls['releaseDate'].setValue(result.releaseDate);
        this.editProduct.controls['price'].setValue(result.price);
        this.editProduct.controls['rating'].setValue(result.rating);
        this.editProduct.controls['imageUrl'].setValue(result.imageUrl);

        console.log('result', result);
      });
  }
  updation() {
    this.api
      .updateProd(this.router.snapshot.params.productId, this.editProduct.value)
      .subscribe((result) => console.log(result));
    this.route.navigate(['products']);

    console.log(this.editProduct.value);
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }

  get productName(): FormControl {
    return this.editProduct.get('productName') as FormControl;
  }
  get description(): FormControl {
    return this.editProduct.get('description') as FormControl;
  }
  get releaseDate(): FormControl {
    return this.editProduct.get('releaseDate') as FormControl;
  }
  get rating(): FormControl {
    return this.editProduct.get('rating') as FormControl;
  }
  get price(): FormControl {
    return this.editProduct.get('price') as FormControl;
  }
  get imageUrl(): FormControl {
    return this.editProduct.get('imageUrl') as FormControl;
  }
  editProdSuccess() {
    this.toastr.success('Edited Successfully');
  }
}
