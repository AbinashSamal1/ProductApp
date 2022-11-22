import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css'],
})
export class ProductNavbarComponent implements OnInit {
  userName: string = '';
  userId: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('name')!;
    this.userId = localStorage.getItem('id')!;
    this.firstName = localStorage.getItem('name')!;
    this.lastName = localStorage.getItem('lname')!;
    this.email = localStorage.getItem('email')!;
  }
  logout() {
    this.auth.signout();
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }
  loggedUSer(data: any) {}
}
