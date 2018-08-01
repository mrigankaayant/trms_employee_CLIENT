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
var payrollCompId_model_1 = require("./model/payrollCompId.model");
var PayrollGroupEditComponent = (function () {
    function PayrollGroupEditComponent(payrollGroupService, employeeService, router, route, formBuilder) {
        this.payrollGroupService = payrollGroupService;
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.payrollGroupReadOnlySelector = true;
        this.payrollGroupEditButtonSelector = false;
        this.display = false;
        this.msgs = [];
        this.deduction = false;
        this.employeeDialog = false;
    }
    PayrollGroupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.payrollGroupMstId = this.route.snapshot.params["id"];
        this.payrollCompsList = [];
        this.payrollComEarningList = [];
        this.payrollComDeductionList = [];
        this.formPayrollGroup = this.formBuilder.group({
            'groupName': '',
            'description': '',
            'id': ''
        });
        this.formPayrollCompForm = this.formBuilder.group({
            'compValue': '',
            'remarks': '',
            'payrollCompMst': this.formBuilder.group({
                'id': ''
            })
        });
        this.formPayrollDeductionCompForm = this.formBuilder.group({
            'compValue': '',
            'remarks': '',
            'payrollCompMst': this.formBuilder.group({
                'id': ''
            })
        });
        this.payrollGroupService.getPayrollGroupById(this.payrollGroupMstId).subscribe(function (data) {
            _this.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
            _this.payrollGroupMst = data;
            _this.formPayrollGroup.patchValue(_this.payrollGroupMst);
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
    PayrollGroupEditComponent.prototype.editAllow = function () {
        this.payrollGroupReadOnlySelector = false;
        this.payrollGroupEditButtonSelector = true;
    };
    PayrollGroupEditComponent.prototype.cancel = function () {
        console.log('this is cancel method');
        this.formPayrollGroup.patchValue(this.payrollGroupMst);
        this.payrollGroupReadOnlySelector = true;
        this.payrollGroupEditButtonSelector = false;
    };
    PayrollGroupEditComponent.prototype.updatePayrollGroupMst = function () {
        var _this = this;
        this.payrollGroupEditButtonSelector = false;
        this.payrollGroupReadOnlySelector = true;
        console.log("update");
        this.payrollGroupService.updatePayrollGroupMst(this.formPayrollGroup.value).subscribe(function (data) {
            _this.payrollGroupMst = data;
            _this.formPayrollGroup.patchValue(_this.payrollGroupMst);
            _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Group Successfully Updated' });
        }, function (err) {
            console.log("ERROR: " + err);
            _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Group Not Updated' });
        }, function () { console.log('Authentication Complete'); });
    };
    PayrollGroupEditComponent.prototype.addPayrollCompEarning = function () {
        var _this = this;
        this.payrollComponentList = [];
        this.display = true;
        var id = 1;
        this.payrollGroupService.getPayrollGroupEarningList(id).subscribe(function (data) {
            _this.payrollEarningForDropDown = data;
            _this.payrollComponentList.push({ label: 'Select Earning Component', value: 'null' });
            for (var i = 0; i < _this.payrollEarningForDropDown.length; i++) {
                _this.payrollComponentList.push({
                    label: _this.payrollEarningForDropDown[i].payrollCompMst.name,
                    value: _this.payrollEarningForDropDown[i].payrollCompMst.id
                });
            }
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () { console.log('Authentication Complete'); });
    };
    PayrollGroupEditComponent.prototype.addPayrollCompDeduction = function () {
        var _this = this;
        this.payrollComponentList = [];
        this.deduction = true;
        var id = 1;
        this.payrollGroupService.getPayrollGroupDeductionList(id).subscribe(function (data) {
            _this.payrollEarningForDropDown = data;
            _this.payrollComponentList.push({ label: 'Select Earning Component', value: 'null' });
            for (var i = 0; i < _this.payrollEarningForDropDown.length; i++) {
                _this.payrollComponentList.push({
                    label: _this.payrollEarningForDropDown[i].payrollCompMst.name,
                    value: _this.payrollEarningForDropDown[i].payrollCompMst.id
                });
            }
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () { console.log('Authentication Complete'); });
    };
    PayrollGroupEditComponent.prototype.savePayrollEarning = function () {
        var _this = this;
        this.msgs = [];
        this.payrollComEarningList = [];
        this.display = false;
        this.payrollComponentEarning = this.formPayrollCompForm.value;
        this.payrollComponentEarning.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
        this.payrollComponentEarning.payrollGroupMst.id = this.payrollGroupMstId;
        this.payrollComponentEarning.id = new payrollCompId_model_1.PayrollCompId();
        this.payrollComponentEarning.id.payrollComMstId = this.payrollComponentEarning.payrollCompMst.id;
        this.payrollComponentEarning.id.payrollGroupMstId = this.payrollGroupMstId;
        this.payrollGroupService.insertPayrollCom(this.payrollComponentEarning).subscribe(function (data) {
            _this.formPayrollCompForm.reset();
            _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Earning Successfully Added' });
        }, function (err) {
            console.log('ERROE :' + err);
            _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Added' });
        }, function () {
            console.log('Authentication Complete');
            _this.payrollGroupService.getPayrollComsByPayrollGroupId(_this.payrollGroupMstId, "Earning").subscribe(function (data) {
                _this.payrollComEarningList = data;
            }, function (err) {
                console.log("ERROR: " + err);
            }, function () { console.log('Authentication Complete'); });
        });
    };
    PayrollGroupEditComponent.prototype.savePayrollDeduction = function () {
        var _this = this;
        this.msgs = [];
        this.payrollComDeductionList = [];
        this.deduction = false;
        this.payrollComponentDeduction = this.formPayrollDeductionCompForm.value;
        this.payrollComponentDeduction.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
        this.payrollComponentDeduction.payrollGroupMst.id = this.payrollGroupMstId;
        this.payrollComponentDeduction.id = new payrollCompId_model_1.PayrollCompId();
        this.payrollComponentDeduction.id.payrollComMstId = this.payrollComponentDeduction.payrollCompMst.id;
        this.payrollComponentDeduction.id.payrollGroupMstId = this.payrollGroupMstId;
        this.payrollGroupService.insertPayrollCom(this.payrollComponentDeduction).subscribe(function (data) {
            _this.formPayrollDeductionCompForm.reset();
            _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Earning Successfully Added' });
        }, function (err) {
            console.log('ERROE :' + err);
            _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Added' });
        }, function () {
            console.log('Authentication Complete');
            _this.payrollGroupService.getPayrollComsByPayrollGroupId(_this.payrollGroupMstId, "Deduction").subscribe(function (data) {
                _this.payrollComDeductionList = data;
            }, function (err) {
                console.log("ERROR: " + err);
            }, function () { console.log('Authentication Complete'); });
        });
    };
    PayrollGroupEditComponent.prototype.removePayrollCompEarning = function () {
        var _this = this;
        this.msgs = [];
        this.payrollComEarningList = [];
        var id;
        if (this.selectedEarningComponent == null) {
            this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Selected' });
        }
        else {
            console.log(this.selectedEarningComponent);
            for (var i = 0; i < this.selectedEarningComponent.length; i++) {
                //id = this.selectedEarningComponent[i].payrollCompMst.id;
                //console.log("CompID"+id);
                this.payrollComEarningList.splice(i);
                this.payrollGroupService.deletePayrollEarningById(this.selectedEarningComponent[i].payrollCompMst.id, this.selectedEarningComponent[i].payrollGroupMst.id).subscribe(function (data) {
                }, function (err) {
                    console.log("ERROR: " + err);
                }, function () {
                    _this.payrollGroupService.getPayrollComsByPayrollGroupId(_this.payrollGroupMstId, "Earning").subscribe(function (data) {
                        _this.payrollComEarningList = data;
                    }, function (err) {
                        console.log("ERROR: " + err);
                    }, function () { console.log('Authentication Complete'); });
                });
            }
        }
    };
    PayrollGroupEditComponent.prototype.removePayrollCompDeduction = function () {
        var _this = this;
        this.msgs = [];
        this.payrollComDeductionList = [];
        var id;
        if (this.selectedDeductionComponent == null) {
            this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Selected' });
        }
        else {
            console.log(this.selectedDeductionComponent);
            for (var i = 0; i < this.selectedDeductionComponent.length; i++) {
                //id = this.selectedEarningComponent[i].payrollCompMst.id;
                //console.log("CompID"+id);
                this.payrollGroupService.deletePayrollEarningById(this.selectedDeductionComponent[i].payrollCompMst.id, this.selectedDeductionComponent[i].payrollGroupMst.id).subscribe(function (data) {
                }, function (err) {
                    console.log("ERROR: " + err);
                }, function () {
                    _this.payrollGroupService.getPayrollComsByPayrollGroupId(_this.payrollGroupMstId, "Deduction").subscribe(function (data) {
                        _this.payrollComDeductionList = data;
                    }, function (err) {
                        console.log("ERROR: " + err);
                    }, function () { console.log('Authentication Complete'); });
                });
            }
        }
    };
    PayrollGroupEditComponent.prototype.LazyLoadCandidate = function (event) {
        var _this = this;
        console.log(event);
        this.employeeService.getLazyEmployees(event).subscribe(function (response) {
            _this.employeeListforLazy = response.data;
            _this.totalRecord = response.totalRecord;
            console.log("Total Record:" + response.totalRecord);
        });
    };
    PayrollGroupEditComponent.prototype.addEmployee = function (event) {
        var _this = this;
        this.employeeDialog = true;
        this.employeeService.getLazyEmployees(event).subscribe(function (response) {
            _this.employeeListforLazy = response.data;
            _this.totalRecord = response.totalRecord;
            console.log("Total Record:" + response.totalRecord);
        });
    };
    PayrollGroupEditComponent.prototype.saveEmployee = function () {
        var _this = this;
        console.log(this.selectedEmployeeLazyList);
        this.employeeList = [];
        for (var _i = 0, _a = this.selectedEmployeeLazyList; _i < _a.length; _i++) {
            var emp = _a[_i];
            emp.payrollGroupMst = this.payrollGroupMst;
        }
        this.employeeService.updateEmployees(this.selectedEmployeeLazyList).subscribe(function (data) {
            _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Employee Successfully Saved' });
        }, function (err) {
            console.log(err.json().message);
            _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Employee Successfully Not Saved' });
        }, function () {
            console.log('Authentication Complete');
            _this.employeeService.getEmployeeListByPayrollGroupId(_this.payrollGroupMstId).subscribe(function (data) {
                _this.employeeList = data;
            }, function (err) {
                console.log("ERROR: " + err);
            }, function () { console.log('Authentication Complete'); });
        });
    };
    return PayrollGroupEditComponent;
}());
PayrollGroupEditComponent = __decorate([
    core_1.Component({
        selector: 'editPayrollGroups',
        templateUrl: 'app/admin/editPayrollGroup.html'
    }),
    __metadata("design:paramtypes", [admin_payrollgroupService_1.PayrollGroupService, admin_employee_service_1.EmployeeService, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
], PayrollGroupEditComponent);
exports.PayrollGroupEditComponent = PayrollGroupEditComponent;
//# sourceMappingURL=admin.editPayrollGroup.component.js.map