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
var loader_service_1 = require("./util/loader.service");
var EmployeeHomeComponent = (function () {
    function EmployeeHomeComponent(router, route, loader) {
        this.router = router;
        this.route = route;
        this.loader = loader;
    }
    EmployeeHomeComponent.prototype.showRecruitmentDashboard = function () {
        this.router.navigate(['/recruitment']);
    };
    EmployeeHomeComponent.prototype.showAccountDashboard = function () {
        this.router.navigate(['/account']);
    };
    EmployeeHomeComponent.prototype.showHRDashboard = function () {
        this.router.navigate(['/hr']);
    };
    EmployeeHomeComponent.prototype.showSalesDashboard = function () {
        this.router.navigate(['/sales']);
    };
    EmployeeHomeComponent.prototype.showAdminDashboard = function () {
        this.router.navigate(['/admin']);
    };
    EmployeeHomeComponent.prototype.showTrainingDashboard = function () {
        this.router.navigate(['/training']);
    };
    return EmployeeHomeComponent;
}());
EmployeeHomeComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: 'app/employee.home.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, loader_service_1.LoaderService])
], EmployeeHomeComponent);
exports.EmployeeHomeComponent = EmployeeHomeComponent;
//# sourceMappingURL=employee.home.component.js.map