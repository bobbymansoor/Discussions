import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Discussion } from './Discussion';
import { DISCUSSIONS } from './DiscussionsResult';

@Injectable()
export class DiscussionService {

  private discussionsUrl = 'api/discussions';

  constructor(private http: Http) { }

  getDiscussions(): Promise<Discussion[]> {
    return this.http.get(this.discussionsUrl)
      .toPromise()
      .then(response => response.json() as Discussion[])
      .catch(this.handleError);
  }

  getDiscussion(id: number): Promise<Discussion> {
    return this.getDiscussions()
      .then(discussions => discussions.find(discussion => discussion.id === id));
  }

  createDiscussion(discussion: Discussion): Observable<Discussion> {

    let body = JSON.stringify(discussion);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.discussionsUrl, discussion, options)
      .map(res => res.json().data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
