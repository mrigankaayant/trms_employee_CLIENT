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
var admin_payrollgroupService_1 = require("./admin.payrollgroupService");
var PayrollGroupListComponent = (function () {
    function PayrollGroupListComponent(payrollGroupService, router) {
        this.payrollGroupService = payrollGroupService;
        this.router = router;
    }
    PayrollGroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.payrollGroupService.getPayrollGroupList().subscribe(function (response) { return _this.payrollGroups = response; }, function (error) { return console.log(error); });
    };
    PayrollGroupListComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/admin/payrollDetails', this.selectedPayrollgroup.id]);
    };
    return PayrollGroupListComponent;
}());
PayrollGroupListComponent = __decorate([
    core_1.Component({
        selector: 'addPayrollGroups',
        templateUrl: 'app/admin/listPayrollGroup.html'
    }),
    __metadata("design:paramtypes", [admin_payrollgroupService_1.PayrollGroupService, router_1.Router])
], PayrollGroupListComponent);
exports.PayrollGroupListComponent = PayrollGroupListComponent;
//# sourceMappingURL=admin.payrollGroupList.component.js.map