import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueEntryComponent } from './issue-entry/issue-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'issue/:id', component: IssueEntryComponent },
  { path: 'issues/:id', component: IssuesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
