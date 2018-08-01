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
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/Rx");
var CandidateRegistrationService = (function () {
    function CandidateRegistrationService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/trmsSOA';
        this.options = new http_2.RequestOptions();
        this.options.headers = new http_2.Headers();
        this.options.headers.append('Content-Type', 'application/json');
    }
    CandidateRegistrationService.prototype.getVisas = function () {
        return this.http.get(this.baseUrl + "/visas").map(function (res) { return res.json().reverse(); });
    };
    return CandidateRegistrationService;
}());
CandidateRegistrationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CandidateRegistrationService);
exports.CandidateRegistrationService = CandidateRegistrationService;
//# sourceMappingURL=candidate.registration.service.js.map