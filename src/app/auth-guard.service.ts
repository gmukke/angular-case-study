import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService,  private router: Router) { }

  canActivate() {
    if (!this.loginService.isLoggedIn){
      this.router.navigate(['/login']);
    }

    return this.loginService.isLoggedIn
  }
}
