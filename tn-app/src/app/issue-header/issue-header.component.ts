import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-issue-header',
  templateUrl: './issue-header.component.html',
  styleUrls: ['./issue-header.component.css']
})
export class IssueHeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private authService: AuthService) { }

  ngOnInit() {
    if(!this.authService.login()) {
      this.router.navigate(['login']);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
