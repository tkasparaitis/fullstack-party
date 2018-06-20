import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';

import { Issue } from '../issue';
import { IssueService} from '../issue.service';

@Component({
  selector: 'app-issue-entry',
  templateUrl: './issue-entry.component.html',
  styleUrls: ['./issue-entry.component.css']
})

export class IssueEntryComponent implements OnInit {
  @Input() issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIssue();
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id)
      .subscribe(issue => this.issue = this.fixIssue(issue));
  }

  fixIssue(issue: Issue): Issue {

      issue.timestamp = moment(issue.timestamp).fromNow();
      issue.labels = issue.labels.split('|')[0];

    return issue;
  }
  goBack(): void {
    this.location.back();
  }

}
