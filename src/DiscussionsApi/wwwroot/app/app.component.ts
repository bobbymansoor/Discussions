import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'my-app',
  template: `
      <div *ngIf="isAuthorised">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h1 style="text-align:center">{{title}}</h1>
            <div style="text-align:center">
              <button type="button" routerLink="/new" class="btn btn-primary">New Discussion</button>
              <button type="button" routerLink="/list" class="btn btn-primary">View Discussion</button>
            </div>
            <router-outlet></router-outlet>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
   `
})
export class AppComponent {
  title = 'Discussion Board';
  isAuthorised: boolean = false;

  constructor(private router: Router, private authorizationService: AuthorizationService) { }

  getAuthorization(): void {
    this.authorizationService.getAuthorization().then(name => {
      if (typeof name == "undefined" || name == "") {
        window.location.href = "http://localhost:6000/api/Authorization/authorize"
       }
      else {
        this.authorizationService.authorizationName = name;
        this.isAuthorised = true;
      }
    });
  }

  ngOnInit(): void {
    this.getAuthorization();
  }

}
