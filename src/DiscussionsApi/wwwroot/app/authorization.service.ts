import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorizationService {

  private authorizationUrl = 'api/authorization';
  authorizationName: string;

  constructor(private http: Http) { }

  getAuthorization(): Promise<string> {
    return this.http.get(this.authorizationUrl)
      .toPromise()
      .then(response => response.text().toString())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
