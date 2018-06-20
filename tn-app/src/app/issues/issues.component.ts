import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../issue';
import { Info } from '../info';
import { IssueService } from '../issue.service';
import * as moment from 'moment';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})


export class IssuesComponent implements OnInit {

  issues: Issue[];
  info: Info[];
  curpage: number;
  paginator: string[];

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService) { }


  ngOnInit() {
    this.getIssues();
    this.getInfo();
    this.curpage = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  onSelect(issue: Issue): void {
    window.location.href = '/issue/' + issue.id;
  }

  getIssues(): void {
    this.issueService.getIssues(1)
      .subscribe(issues => this.issues = this.fixIssue(issues));
  }

  getInfo(): void {
    this.issueService.getInfo().subscribe(info => this.info = this.createPages(info));
  }

  fixIssue(issues: Issue[]): Issue[] {

    for (let i = 0; i < issues.length; i++ ) {
      issues[i].timestamp = moment(issues[i].timestamp).fromNow();
      issues[i].labels = issues[i].labels.split('|')[0];
    }

    return issues;
  }

  createPages(info: Info[]) {
    const maxpage = Math.ceil(info[0].open / 25);
    let some = 0;
    this.paginator = [];
    for (let i = 1; i <= maxpage; i++ ) {
      if ((i < 3) || (i > maxpage - 2) || ((i > this.curpage - 2) && (i < this.curpage + 2))) {
        this.paginator.push(i.toString());
        some = 1;
      } else {
        if (some === 1) {
          some = 0;
          this.paginator.push('...');
        }
      }
    }
    return info;
  }

}
