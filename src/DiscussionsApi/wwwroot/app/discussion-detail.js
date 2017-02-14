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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
var Discussion_1 = require("./Discussion");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var discussion_service_1 = require("./discussion.service");
var authorization_service_1 = require("./authorization.service");
var DiscussionDetail = (function () {
    function DiscussionDetail(discussionService, route, location, router, authorizationService) {
        this.discussionService = discussionService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.authorizationService = authorizationService;
    }
    DiscussionDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.discussionService.getDiscussion(+params['id']); })
            .subscribe(function (discussion) {
            _this.discussion = discussion;
            if (typeof _this.discussion == "undefined")
                _this.discussion = new Discussion_1.Discussion(0, _this.authorizationService.authorizationName, '', '', '', '', '');
        });
    };
    DiscussionDetail.prototype.goSave = function (discussion) {
        var _this = this;
        this.discussionService.createDiscussion(discussion)
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of();
        })
            .subscribe(function (data) {
            _this.router.navigate(['/list']);
        });
    };
    DiscussionDetail.prototype.goBack = function () {
        this.location.back();
    };
    return DiscussionDetail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Discussion_1.Discussion)
], DiscussionDetail.prototype, "discussion", void 0);
DiscussionDetail = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-discussion-detail',
        templateUrl: './template/discussion-detail.html',
        styleUrls: ['../styles.css']
    }),
    __metadata("design:paramtypes", [discussion_service_1.DiscussionService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router,
        authorization_service_1.AuthorizationService])
], DiscussionDetail);
exports.DiscussionDetail = DiscussionDetail;
//# sourceMappingURL=discussion-detail.js.map