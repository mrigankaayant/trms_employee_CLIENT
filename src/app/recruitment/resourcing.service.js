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
var ResourcingService = (function () {
    function ResourcingService(http, nativeHttp) {
        this.http = http;
        this.nativeHttp = nativeHttp;
    }
    ResourcingService.prototype.getCandidateDetails = function () {
        return this.http.get('/resourcing/candidates').map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.addCandidate = function (addCandidate) {
        console.log(this.addCandidate);
        return this.http.post('/recruiting/candidate', addCandidate, this.options).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findCandidateById = function (id) {
        return this.http.get('/recruiting/candidate/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.addFollowup = function (updateFollowup) {
        return this.http.post('/recruiting/followup', updateFollowup, this.options).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findCandidateByIdForshow = function (id) {
        return this.http.get('/recruiting/view/candidate/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findFollowUpListById = function (id) {
        return this.http.get('/recruiting/followUps/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.getCandidatesList = function () {
        return this.http.get('/recruiting/candidates').map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.getSearchCandidate = function (candidateSearch) {
        return this.http.post('/recruiting/searchCandidate', candidateSearch, this.options).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findCandidateByIdForUpdate = function (id) {
        return this.http.get('/recruiting/update/candidate/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.updateCandidate = function (addCandidate) {
        return this.http.post('/recruiting/update/candidate', addCandidate, this.options).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.checkEmail = function (email, id) {
        return this.http.get('/recruiting/checkEmail/' + email + '/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.checkMobile = function (mobile, id) {
        return this.http.get('/recruiting/checkMobile/' + mobile + '/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findFreePoolCandidates = function () {
        return this.http.get('/recruiting/freepool/candidates').map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.addFollowupForFreepool = function (updateFollowup) {
        return this.http.post('/recruiting/freepool/followup', updateFollowup, this.options).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findPhoneCallsById = function (id) {
        return this.http.get('/phonecalls/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findCallHistory = function () {
        return this.http.get('/phonelogs').map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.findIncentiveList = function (typeFor) {
        return this.http.get('/incentiveList/' + typeFor).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.updateFollowupForFreepool = function (updateFollowup) {
        return this.http.post('/freepool/update/followup', updateFollowup, this.options).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.enrollmentSend = function (id) {
        return this.http.get('/sendEnrollmentForm/' + id).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.paymentDetails = function (candidateId) {
        return this.http.get('/paymentList/' + candidateId).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.ownPayment = function () {
        return this.http.get('/owncandidatepayment').map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.teamPayment = function () {
        return this.http.get('/teamcandidatepayment').map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.ownPaymentByMonthYear = function (month, year) {
        return this.http.get('/owncandidatepayment/' + month + '/' + year).map(function (response) { return response.json(); });
    };
    ResourcingService.prototype.teamPaymentByMonthYear = function (month, year) {
        return this.http.get('/teamcandidatepayment/' + month + '/' + year).map(function (response) { return response.json(); });
    };
    return ResourcingService;
}());
ResourcingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, http_1.Http])
], ResourcingService);
exports.ResourcingService = ResourcingService;
//# sourceMappingURL=resourcing.service.js.map