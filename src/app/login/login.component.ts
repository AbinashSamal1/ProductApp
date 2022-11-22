import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private logForm: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.logForm.group({
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.auth.storeToken(res.token);
          this.auth.storeId(res.userId);
          this.auth.storeName(res.firstName);
          this.auth.storelName(res.lastName);
          this.auth.storeEmail(res.emailAddress);
          this.router.navigate(['products']);
        },
        error: () => {
          this.toastr.error('Wrong User/Password. Register to continue');
          this.router.navigate(['signup']);
        },
      });
    }
  }
}
