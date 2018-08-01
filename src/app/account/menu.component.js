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
var account_service_1 = require("./account.service");
var MenuComponent = (function () {
    function MenuComponent(accountService) {
        this.accountService = accountService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Candidate List', icon: 'fa fa-plus', routerLink: ['/account/paidcandidate'] },
            { label: 'Incentive', icon: 'fa-users', routerLink: ['/account/inecentive'] },
            { label: 'Log Out', icon: 'fa-sign-out', routerLink: ['/account/logout'] }
        ];
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        templateUrl: 'app/account/menu.html'
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map