import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  constructor(
    private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getComments(id)
      .subscribe(comments => this.comments = comments);
  }

}
