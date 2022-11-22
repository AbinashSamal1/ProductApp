import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ]),
      email: ['', Validators.required],
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      confirmpassword: new FormControl(''),
    });
  }
  onsignup() {
    if (this.signupForm.valid) {
      this.auth.signup(this.signupForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
      });
    }
  }
}
