import { NgModule, OnInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Router } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { DiscussionList } from './discussion-list';
import { DiscussionDetail } from './discussion-detail';
import { DiscussionService } from './discussion.service';
import { AuthorizationService } from './authorization.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DiscussionDetail,
    DiscussionList
  ],
  providers: [
    DiscussionService,
    AuthorizationService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
