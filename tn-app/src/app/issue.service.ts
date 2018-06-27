import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {tap} from 'rxjs/internal/operators';

import { Issue } from './issue';
import { Info } from './info';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class IssueService {

  private issuesUrl = 'http://localhost:5000/issue/';  // URL to web api
  private issueUrl = this.issuesUrl + 'entry';
  private infoUrl = 'http://localhost:5000/issue/db/info';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getIssues(page: number): Observable<Issue[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('IssueService: fetched issues');
    const issues = this.http.get<Issue[]>(this.issuesUrl + page);
    return issues;
  }

  getIssue(id: number): Observable<Issue> {
    const url = `${this.issueUrl}/${id}`;
    const issue = this.http.get<Issue>(url).pipe(
      tap(_ => this.log(`fetched issue id=${id}`))
    );

    return issue;
  }

  getInfo(): Observable<Info[]> {
    const info = this.http.get<Info[]>(this.infoUrl).pipe(
      tap(_ => this.log(`fetched info`))
    );
    return info;
  }
  private log(message: string) {
    this.messageService.add('IssueService: ' + message);
  }


}
