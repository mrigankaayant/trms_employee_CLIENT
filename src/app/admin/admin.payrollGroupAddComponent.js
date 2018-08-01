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
var payrollCompId_model_1 = require("./model/payrollCompId.model");
var PayrollGroupAddComponent = (function () {
    function PayrollGroupAddComponent(payrollGroupService, employeeService, formBuilder, router) {
        this.payrollGroupService = payrollGroupService;
        this.employeeService = employeeService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.payrollGroupSelector = false;
        this.payrollComEarningSelector = true;
        this.payrollComDeductionSelector = true;
        this.employeeListSelector = true;
        this.payrollGroupId = 0;
        this.selectedEarnings = [];
    }
    PayrollGroupAddComponent.prototype.ngOnInit = function () {
        this.formPayrollGroup = this.formBuilder.group({
            'groupName': '',
            'description': ''
        });
        this.formTemplate = this.formBuilder.group({
            'id': ''
        });
    };
    PayrollGroupAddComponent.prototype.goToAddEarning = function () {
        var _this = this;
        this.payrollgroupList = [];
        var id = 1;
        this.payrollGroupService.getPayrollGroupEarningList(id).subscribe(function (Response) {
            _this.payrollComEarningList = Response;
        });
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = false;
    };
    PayrollGroupAddComponent.prototype.backToPayrollGroup = function () {
        this.payrollGroupSelector = false;
        this.payrollComEarningSelector = true;
    };
    PayrollGroupAddComponent.prototype.goToAddDeduction = function () {
        var _this = this;
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = true;
        this.payrollComDeductionSelector = false;
        var id = 1;
        this.payrollGroupService.getPayrollGroupDeductionList(id).subscribe(function (Response) {
            _this.payrollComDeductionList = Response;
        });
    };
    PayrollGroupAddComponent.prototype.backToEarningCom = function () {
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = false;
        this.payrollComDeductionSelector = true;
        this.employeeListSelector = true;
    };
    PayrollGroupAddComponent.prototype.goToAddEmployee = function () {
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = true;
        this.payrollComDeductionSelector = true;
        this.employeeListSelector = false;
    };
    PayrollGroupAddComponent.prototype.LazyLoadCandidate = function (event) {
        var _this = this;
        this.employeeService.getLazyEmployees(event).subscribe(function (response) {
            _this.employeeList = response.data;
            _this.totalRecord = response.totalRecord;
        });
    };
    PayrollGroupAddComponent.prototype.backToDeductionComp = function () {
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = true;
        this.payrollComDeductionSelector = false;
        this.employeeListSelector = true;
    };
    PayrollGroupAddComponent.prototype.createPayrollGroup = function () {
        var _this = this;
        var id;
        this.payrollGroupService.addPayrollGroupMst(this.formPayrollGroup.value).subscribe(function (data) {
            _this.payrollGroupMst = data;
            id = data.id;
            console.log("Data Id" + data.id);
            console.log("Normal Id" + id);
            for (var _i = 0, _a = _this.selectedEarningComponent; _i < _a.length; _i++) {
                var p = _a[_i];
                p.payrollGroupMst = _this.payrollGroupMst;
                p.id = new payrollCompId_model_1.PayrollCompId();
                p.id.payrollComMstId = p.payrollCompMst.id;
                p.id.payrollGroupMstId = _this.payrollGroupMst.id;
            }
            _this.payrollGroupService.addPayrollComponents(_this.selectedEarningComponent).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log('ERROE :' + err);
            }, function () { console.log('Authentication Complete'); });
            for (var _b = 0, _c = _this.selectedDeductionComponent; _b < _c.length; _b++) {
                var p = _c[_b];
                p.payrollGroupMst = _this.payrollGroupMst;
                p.id = new payrollCompId_model_1.PayrollCompId();
                p.id.payrollComMstId = p.payrollCompMst.id;
                p.id.payrollGroupMstId = _this.payrollGroupMst.id;
            }
            _this.payrollGroupService.addPayrollComponents(_this.selectedDeductionComponent).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err.json().message);
            }, function () { console.log('Authentication Complete'); });
            console.log(_this.selectedEmployeeList);
            for (var _d = 0, _e = _this.selectedEmployeeList; _d < _e.length; _d++) {
                var emp = _e[_d];
                emp.payrollGroupMst = _this.payrollGroupMst;
            }
            _this.employeeService.updateEmployees(_this.selectedEmployeeList).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log('ERROR: ' + err);
            }, function () {
                console.log('Authentication Complete');
                console.log("Current" + id);
                _this.router.navigate(['admin/payrollGroupView', id]);
            });
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            console.log('Authentication Complete');
        });
        //this.router.navigate(['admin/payrollGroupList']);
        //this.router.navigate(['admin/payrollGroupView',id]);
    };
    PayrollGroupAddComponent.prototype.goToEmployeeList = function () {
        this.payrollComEarningSelector = true;
        this.payrollComEarningSelector = true;
        this.employeeListSelector = false;
    };
    PayrollGroupAddComponent.prototype.backTemplatePanel = function () {
        this.payrollComEarningSelector = false;
        this.payrollComEarningSelector = false;
        this.employeeListSelector = true;
    };
    PayrollGroupAddComponent.prototype.goToPayrollGroupListPanel = function () {
        var _this = this;
        this.payrollGroupService.addPayrollGroupMst(this.formPayrollGroup.value).subscribe(function (data) {
            _this.payrollGroupMst = data;
            for (var _i = 0, _a = _this.selectedEarningComponent; _i < _a.length; _i++) {
                var p = _a[_i];
                p.payrollGroupMst = _this.payrollGroupMst;
                p.id = new payrollCompId_model_1.PayrollCompId();
                p.id.payrollComMstId = p.payrollCompMst.id;
                p.id.payrollGroupMstId = _this.payrollGroupMst.id;
            }
            _this.payrollGroupService.addPayrollComponents(_this.selectedEarningComponent).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log('ERROE :' + err);
            }, function () { console.log('Authentication Complete'); });
            for (var _b = 0, _c = _this.selectedDeductionComponent; _b < _c.length; _b++) {
                var p = _c[_b];
                p.payrollGroupMst = _this.payrollGroupMst;
                p.id = new payrollCompId_model_1.PayrollCompId();
                p.id.payrollComMstId = p.payrollCompMst.id;
                p.id.payrollGroupMstId = _this.payrollGroupMst.id;
            }
            _this.payrollGroupService.addPayrollComponents(_this.selectedDeductionComponent).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err.json().message);
            }, function () { console.log('Authentication Complete'); });
            console.log(_this.selectedEmployeeList);
            for (var _d = 0, _e = _this.selectedEmployeeList; _d < _e.length; _d++) {
                var emp = _e[_d];
                emp.payrollGroupMst = _this.payrollGroupMst;
            }
            _this.employeeService.updateEmployees(_this.selectedEmployeeList).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log('ERROR: ' + err);
            }, function () { console.log('Authentication Complete'); });
        }, function (err) {
            console.log(err.json().message);
        }, function () { console.log('Authentication Complete'); });
        this.router.navigate(['admin/payrollGroupList']);
    };
    PayrollGroupAddComponent.prototype.getPayrollGroupId = function (event) {
        var _this = this;
        var id = event.value;
        if (id > 0) {
            this.payrollGroupService.getPayrollGroupEarningList(event.value).subscribe(function (data) {
                _this.payrollComEarningList = data;
                _this.selectedEarningComponent = [];
                for (var _i = 0, _a = _this.payrollComEarningList; _i < _a.length; _i++) {
                    var e = _a[_i];
                    if (e.payrollCompMst.isMandatory > 0) {
                        _this.selectedEarningComponent.push(e);
                    }
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () { console.log('Authentication Complete'); });
            this.payrollGroupService.getPayrollGroupDeductionList(event.value).subscribe(function (data) {
                _this.payrollComDeductionList = data;
                _this.selectedDeductionComponent = [];
                for (var _i = 0, _a = _this.payrollComDeductionList; _i < _a.length; _i++) {
                    var e = _a[_i];
                    if (e.payrollCompMst.isMandatory > 0) {
                        _this.selectedDeductionComponent.push(e);
                    }
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () { console.log('Authentication Complete'); });
            this.payrollComEarningSelector = false;
        }
        else {
            this.payrollComEarningSelector = true;
        }
    };
    return PayrollGroupAddComponent;
}());
PayrollGroupAddComponent = __decorate([
    core_1.Component({
        selector: 'addPayrollGroups',
        templateUrl: 'app/admin/addPayrollGroup.html'
    }),
    __metadata("design:paramtypes", [admin_payrollgroupService_1.PayrollGroupService, admin_employee_service_1.EmployeeService,
        forms_1.FormBuilder, router_1.Router])
], PayrollGroupAddComponent);
exports.PayrollGroupAddComponent = PayrollGroupAddComponent;
//# sourceMappingURL=admin.payrollGroupAddComponent.js.map