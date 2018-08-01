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
var candidate_service_1 = require("./candidate.service");
var SuccessComponent = (function () {
    function SuccessComponent(router, route, candidateService) {
        this.router = router;
        this.route = route;
        this.candidateService = candidateService;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.paymentId = params['paymentId'];
            //let value_2 = params['token'];
            _this.payerId = params['PayerID'];
            //console.log(value_1);
        });
        this.candidateService.goToSuccess(this.paymentId, this.payerId).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    SuccessComponent.prototype.goToLogin = function () {
        sessionStorage.clear();
        this.router.navigate(['login']);
    };
    return SuccessComponent;
}());
SuccessComponent = __decorate([
    core_1.Component({
        selector: 'success',
        templateUrl: 'app/candidate/successPayment.html',
        styleUrls: ['./app/candidate/candidate.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, candidate_service_1.CandidateService])
], SuccessComponent);
exports.SuccessComponent = SuccessComponent;
//# sourceMappingURL=candidate.success.component.js.map