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
var LogOutComponent = (function () {
    function LogOutComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log("Enter");
        this.showloader = true;
    }
    LogOutComponent.prototype.ngOnInit = function () {
        sessionStorage.clear();
        this.router.navigate(['login']);
    };
    return LogOutComponent;
}());
LogOutComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/account/logout.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], LogOutComponent);
exports.LogOutComponent = LogOutComponent;
//# sourceMappingURL=logout.component.js.map