"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Add', icon: 'fa fa-plus', routerLink: ['/recruitment/addCandidate'] },
            { label: 'List', icon: 'fa-list', routerLink: ['/recruitment/listCandidate'] },
            { label: 'FreePool', icon: 'fa-users', routerLink: ['/recruitment/freepoolcandidate'] },
            { label: 'Call History', icon: 'fa-history', routerLink: ['/recruitment/callHistory'] },
            { label: 'Search', icon: 'fa-search', routerLink: ['/recruitment/searchCandidate'] },
            { label: 'Incentive', icon: 'fa-inr', routerLink: ['/recruitment/incentive'] },
            { label: 'Incentive List', icon: 'fa-list-ul', routerLink: ['/recruitment/incentiveList'] },
            { label: 'Log Out', icon: 'fa-sign-out', url: '../../login' }
        ];
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        templateUrl: 'app/recruitment/menu.html'
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map