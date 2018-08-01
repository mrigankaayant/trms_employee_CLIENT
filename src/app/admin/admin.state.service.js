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
var StateService = (function () {
    function StateService(http) {
        this.http = http;
    }
    StateService.prototype.getStateList = function () {
        return this.http.get('/states').map(function (response) { return response.json(); });
    };
    StateService.prototype.getStateListByCountryId = function (id) {
        return this.http.get('/country/' + id + '/states').map(function (response) { return response.json(); });
        ;
    };
    return StateService;
}());
StateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], StateService);
exports.StateService = StateService;
//# sourceMappingURL=admin.state.service.js.map