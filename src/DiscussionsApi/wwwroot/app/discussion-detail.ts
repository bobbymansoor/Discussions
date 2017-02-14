import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Discussion } from './Discussion';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DiscussionService } from './discussion.service';
import { AuthorizationService } from './authorization.service';

@Component({
  moduleId: module.id,
  selector: 'my-discussion-detail',
  templateUrl: './template/discussion-detail.html',
  styleUrls: ['../styles.css']
})

export class DiscussionDetail implements OnInit {
  @Input()
  discussion: Discussion;
  discussions: Discussion[];

  constructor(
    private discussionService: DiscussionService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.discussionService.getDiscussion(+params['id']))
      .subscribe(discussion => {
        this.discussion = discussion
        if(typeof this.discussion == "undefined")
          this.discussion = new Discussion(0, this.authorizationService.authorizationName  , '', '','','','');
      });

  }

  goSave(discussion: Discussion): void {
    this.discussionService.createDiscussion(discussion)
      .catch(error => {
        console.log(error);
        return Observable.of<Discussion>();
      })
      .subscribe((data: Discussion) => {
        this.router.navigate(['/list']);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
