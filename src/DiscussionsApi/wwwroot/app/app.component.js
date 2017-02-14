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
var router_1 = require("@angular/router");
var authorization_service_1 = require("./authorization.service");
var AppComponent = (function () {
    function AppComponent(router, authorizationService) {
        this.router = router;
        this.authorizationService = authorizationService;
        this.title = 'Discussion Board';
        this.isAuthorised = false;
    }
    AppComponent.prototype.getAuthorization = function () {
        var _this = this;
        this.authorizationService.getAuthorization().then(function (name) {
            if (typeof name == "undefined" || name == "") {
                window.location.href = "http://localhost:6000/api/Authorization/authorize";
            }
            else {
                _this.authorizationService.authorizationName = name;
                _this.isAuthorised = true;
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getAuthorization();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <div *ngIf=\"isAuthorised\">\n        <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n            <h1 style=\"text-align:center\">{{title}}</h1>\n            <div style=\"text-align:center\">\n              <button type=\"button\" routerLink=\"/new\" class=\"btn btn-primary\">New Discussion</button>\n              <button type=\"button\" routerLink=\"/list\" class=\"btn btn-primary\">View Discussion</button>\n            </div>\n            <router-outlet></router-outlet>\n          </div>\n          <div class=\"col-md-3\"></div>\n        </div>\n      </div>\n   "
    }),
    __metadata("design:paramtypes", [router_1.Router, authorization_service_1.AuthorizationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map