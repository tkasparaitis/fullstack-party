import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Comment } from './comment';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private commentsUrl = 'http://localhost:3000/comment';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getComments(issue: number): Observable<Comment[]> {
    const url = `${this.commentsUrl}/${issue}`;
    this.messageService.add('CommentService: fetched comments');
    let comments = this.http.get<Comment[]>(url)
    return comments;
  }

  private log(message: string) {
    this.messageService.add('CommentService: ' + message);
  }

}
