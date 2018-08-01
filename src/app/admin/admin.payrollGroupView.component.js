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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var admin_payrollgroupService_1 = require("./admin.payrollgroupService");
var admin_employee_service_1 = require("./admin.employee.service");
var payrollGroup_model_1 = require("./model/payrollGroup.model");
var PayrollGroupViewComponent = (function () {
    function PayrollGroupViewComponent(payrollGroupService, employeeService, router, route, formBuilder) {
        this.payrollGroupService = payrollGroupService;
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.payrollGroupReadOnlySelector = true;
        this.payrollGroupEditButtonSelector = false;
        this.display = false;
        this.msgs = [];
    }
    PayrollGroupViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.payrollGroupMstId = this.route.snapshot.params["id"];
        this.payrollCompsList = [];
        this.payrollComEarningList = [];
        this.payrollComDeductionList = [];
        this.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
        this.payrollGroupService.getPayrollGroupById(this.payrollGroupMstId).subscribe(function (data) {
            _this.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
            _this.payrollGroupMst = data;
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () { console.log('Authentication Complete'); });
        this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId, "Earning").subscribe(function (data) {
            _this.payrollComEarningList = data;
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () { console.log('Authentication Complete'); });
        this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId, "Deduction").subscribe(function (data) {
            _this.payrollComDeductionList = data;
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () { console.log('Authentication Complete'); });
        this.employeeService.getEmployeeListByPayrollGroupId(this.payrollGroupMstId).subscribe(function (data) {
            _this.employeeList = data;
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () { console.log('Authentication Complete'); });
    };
    PayrollGroupViewComponent.prototype.goToPayrollList = function () {
        this.router.navigate(['admin/payrollGroupList']);
    };
    return PayrollGroupViewComponent;
}());
PayrollGroupViewComponent = __decorate([
    core_1.Component({
        selector: 'viewPayrollGroup',
        templateUrl: 'app/admin/viewPayrollGroup.html'
    }),
    __metadata("design:paramtypes", [admin_payrollgroupService_1.PayrollGroupService, admin_employee_service_1.EmployeeService, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
], PayrollGroupViewComponent);
exports.PayrollGroupViewComponent = PayrollGroupViewComponent;
//# sourceMappingURL=admin.payrollGroupView.component.js.map