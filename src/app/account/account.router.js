"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var paid_candidate_component_1 = require("./paid.candidate.component");
var incentive_component_1 = require("./incentive.component");
var logout_component_1 = require("./logout.component");
var router = [
    { path: '', redirectTo: 'paidcandidate', pathMatch: 'full' },
    { path: 'paidcandidate', component: paid_candidate_component_1.PaidCandidateComponent },
    { path: 'inecentive', component: incentive_component_1.IncenTiveComponent },
    { path: 'logout', component: logout_component_1.LogOutComponent }
];
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    return AccountRoutingModule;
}());
AccountRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(router)],
        exports: [router_1.RouterModule]
    })
], AccountRoutingModule);
exports.AccountRoutingModule = AccountRoutingModule;
//# sourceMappingURL=account.router.js.map