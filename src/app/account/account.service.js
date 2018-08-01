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
var http_1 = require("@angular/http");
var http_service_1 = require("../util/http.service");
var AccountService = (function () {
    function AccountService(http, nativeHttp) {
        this.http = http;
        this.nativeHttp = nativeHttp;
    }
    AccountService.prototype.getUserType = function () {
        return this.http.get('/findUserType').map(function (response) { return response.json(); });
    };
    AccountService.prototype.getCandidateDetailsByUserId = function (userId) {
        return this.http.get('/candidate/' + userId).map(function (response) { return response.json(); });
    };
    AccountService.prototype.getAllPaidCandidateList = function () {
        console.log("HIT");
        return this.http.get('/allpaidcandidate').map(function (response) { return response.json(); });
    };
    AccountService.prototype.findCandidateById = function (id) {
        return this.http.get('/recruiting/view/candidate/' + id).map(function (response) { return response.json(); });
    };
    AccountService.prototype.paymentDetails = function (candidateId) {
        return this.http.get('/paymentList/' + candidateId).map(function (response) { return response.json(); });
    };
    AccountService.prototype.getEmployees = function () {
        return this.http.get('/employees').map(function (response) { return response.json(); });
    };
    AccountService.prototype.ownPaymentByMonthYearEmpID = function (month, year, employeeId) {
        return this.http.get('/owncandidatepayment/' + employeeId + '/' + month + '/' + year).map(function (response) { return response.json(); });
    };
    AccountService.prototype.teamPaymentByMonthYearrEmpID = function (month, year, employeeId) {
        return this.http.get('/teamcandidatepayment/' + employeeId + '/' + month + '/' + year).map(function (response) { return response.json(); });
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, http_1.Http])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map