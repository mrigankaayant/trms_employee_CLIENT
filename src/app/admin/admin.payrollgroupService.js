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
var http_service_1 = require("../util/http.service");
require("rxjs/add/operator/map");
require("rxjs/Rx");
var PayrollGroupService = (function () {
    function PayrollGroupService(http) {
        this.http = http;
    }
    PayrollGroupService.prototype.getPayrollGroupList = function () {
        return this.http.get('/payrollGroups').map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.getPayrollGroupById = function (id) {
        console.log(id);
        return this.http.get('/payrollGroup/' + id).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.getPayrollGroupEarningList = function (defaultPayrollGroupId) {
        return this.http.get('/payrollgroup/' + defaultPayrollGroupId + '/payrollEarningComps').map(function (res) { return res.json().reverse(); });
    };
    PayrollGroupService.prototype.getPayrollGroupDeductionList = function (defaultPayrollGroupId) {
        return this.http.get('/payrollgroup/' + defaultPayrollGroupId + '/payrollDeductions').map(function (res) { return res.json().reverse(); });
    };
    PayrollGroupService.prototype.addPayrollGroupMst = function (payrollGroupModel) {
        return this.http.post('/payrollGroup', payrollGroupModel, this.options).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.updatePayrollGroupMst = function (payrollGroupModel) {
        return this.http.put('/payrollGroupUpdate', payrollGroupModel, this.options).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.addPayrollComponents = function (payrollComps) {
        return this.http.post('/payrollComps', payrollComps, this.options).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.getPayrollComsByPayrollGroupId = function (id, type) {
        return this.http.get('/payrollCompsListByPayrollGroupId/' + id + '/' + type).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.insertPayrollCom = function (payrollComp) {
        return this.http.post('/payrollComp', payrollComp, this.options).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.getPayrollEarningById = function (id) {
        return this.http.get('/payrollEarning/' + id).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.deletePayrollEarningById = function (compId, groupId) {
        return this.http.get('/payrollEarningDelete/' + compId + '/' + groupId).map(function (response) { return response.json(); });
    };
    PayrollGroupService.prototype.addEmployee = function (employee) {
        return this.http.post('/employee', employee, this.options).map(function (response) { return response.json(); });
    };
    return PayrollGroupService;
}());
PayrollGroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], PayrollGroupService);
exports.PayrollGroupService = PayrollGroupService;
//# sourceMappingURL=admin.payrollgroupService.js.map