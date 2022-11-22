import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://www.dummyproducts.com/api/';

  constructor(private http: HttpClient, private router: Router) {}

  signup(data: user) {
    return this.http.post<any>(`${this.baseUrl}register`, data);
  }

  login(data: user) {
    return this.http.post<any>(`${this.baseUrl}token`, data);
  }

  signout() {
    localStorage.clear();
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }
  storeName(name: string) {
    localStorage.setItem('name', name);
  }
  storeEmail(email: string) {
    localStorage.setItem('email', email);
  }
  storelName(name: string) {
    localStorage.setItem('lname', name);
  }
  storeId(id: string) {
    localStorage.setItem('id', id);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
