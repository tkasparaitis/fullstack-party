import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  private jwtHelper: JwtHelperService;

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return true; // !this.jwtHelper.isTokenExpired(token);
  }
  public login(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
     // !this.jwtHelper.isTokenExpired(token);
  }

}
