import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private router:Router,private toast:ToastrService) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.toast.error('Please login first')
      this.router.navigate  (['login'])
      return false;
    }
  }
}
