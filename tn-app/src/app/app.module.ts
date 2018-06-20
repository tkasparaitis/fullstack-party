import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueEntryComponent } from './issue-entry/issue-entry.component';
import { LoginComponent } from './login/login.component';
import { IssueHeaderComponent } from './issue-header/issue-header.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { EscapeHtmlPipe } from './pipes/trusthtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueEntryComponent,
    LoginComponent,
    IssueHeaderComponent,
    MessagesComponent,
    CommentsComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
