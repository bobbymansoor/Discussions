import { Component, OnInit } from '@angular/core';

import { Discussion } from './Discussion';
import { DiscussionService } from './discussion.service';
import {Router} from "@angular/router";

@Component({
  selector: 'my-discussion-list',
  templateUrl: './app/template/discussion-list.html',
  styleUrls: ['../styles.css']
})
export class DiscussionList implements OnInit {
	title = 'Bobby';
  discussions: Discussion[];
  selectedDiscussion: Discussion;

  constructor(private router: Router, private discussionService: DiscussionService) { }

  getDiscussions(): void {
    this.discussionService.getDiscussions().then(discussions => this.discussions = discussions);
  }

  ngOnInit(): void {
    this.getDiscussions();
  }

  onSelect(discussion: Discussion): void {
    this.selectedDiscussion = discussion;
    this.router.navigate(['/detail', this.selectedDiscussion.id]);
  };
}
