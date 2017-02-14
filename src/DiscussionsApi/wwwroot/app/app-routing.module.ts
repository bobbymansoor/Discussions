import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscussionDetail }      from './discussion-detail';
import { DiscussionList }  from './discussion-list';

const routes: Routes = [
  //{ path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: DiscussionList },
  { path: 'detail/:id', component: DiscussionDetail },
  { path: 'new', component: DiscussionDetail }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
