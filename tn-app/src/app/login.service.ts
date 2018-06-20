import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';

import { Observable, of } from 'rxjs';
import {tap, map} from 'rxjs/internal/operators';

import { Token } from './token';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginUrl = 'http://localhost:3000/api/auth/login';  // URL to web api

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService) { }

  loginUser(email: string, password: string): Observable<Token> {
    const token = this.http.post<Token>(this.loginUrl, {email: email, password: password}).pipe(
      map(response => {
        if(response.auth){
          localStorage.setItem('token', response.token);

          if(this.authService.login()) {
            this.router.navigate(['issues/1']);
          }

        } else {
          localStorage.removeItem('token');
        }
        return response;
      })
    );
    return token;
  }


  private log(message: string) {
    this.messageService.add('IssueService: ' + message);
  }

}
