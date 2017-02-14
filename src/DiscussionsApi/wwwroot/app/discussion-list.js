"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var discussion_service_1 = require("./discussion.service");
var router_1 = require("@angular/router");
var DiscussionList = (function () {
    function DiscussionList(router, discussionService) {
        this.router = router;
        this.discussionService = discussionService;
        this.title = 'Bobby';
    }
    DiscussionList.prototype.getDiscussions = function () {
        var _this = this;
        this.discussionService.getDiscussions().then(function (discussions) { return _this.discussions = discussions; });
    };
    DiscussionList.prototype.ngOnInit = function () {
        this.getDiscussions();
    };
    DiscussionList.prototype.onSelect = function (discussion) {
        this.selectedDiscussion = discussion;
        this.router.navigate(['/detail', this.selectedDiscussion.id]);
    };
    ;
    return DiscussionList;
}());
DiscussionList = __decorate([
    core_1.Component({
        selector: 'my-discussion-list',
        templateUrl: './app/template/discussion-list.html',
        styleUrls: ['../styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, discussion_service_1.DiscussionService])
], DiscussionList);
exports.DiscussionList = DiscussionList;
//# sourceMappingURL=discussion-list.js.map