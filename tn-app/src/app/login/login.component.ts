import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { Token } from '../token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  button = 'Login With Dummy service';
  legedIn = false;
  token: Token;

  constructor(
    private http: HttpClient,
    private router:Router,
    private loginService: LoginService,
    private authService: AuthService ) { }

  ngOnInit() {
    if(this.authService.login()) {
      this.router.navigate(['issues/1']);
    }
  }

  loginUser(): void {

    const email = 'login@github.com';
    const password = 'Git123!';
    this.loginService.loginUser(email, password)
       .subscribe(token => this.token = token);
  }

  onSelect(): void {
    this.loginUser();
  }
}
