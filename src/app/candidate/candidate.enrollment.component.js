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
var candidate_service_1 = require("./candidate.service");
var EnrollmentComponent = (function () {
    function EnrollmentComponent(formBuilder, route, router, candidateService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.candidateService = candidateService;
    }
    EnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentDetails = [];
        this.showloader = true;
        this.candidateId = this.route.snapshot.params["id"];
        /*this.candidateService.getUserType().subscribe(
         data => {
                    this.userMst = data;
         },
         err => {
                console.log(err);
         },
        () => {
            this.id = this.userMst.userId;
            console.log(this.id);
            this.candidateService.getCandidateDetailsByUserId(this.id).subscribe(
         data => {
                   this.candidateId = data.candidateId;
         },
         err => {
                console.log(err);
         },
        () => {

            this.candidateService.getPaymentDetails(this.candidateId).subscribe(
         data => {
                    console.log(data);
                    this.paymentDetails = data;
         },
         err => {
                console.log(err);
         },
        () => {
            console.log(this.id);
            this.showloader = false;
        }
        );
            
        }
        );
            
        }
        );*/
        this.candidateService.getPaymentDetails(this.candidateId).subscribe(function (data) {
            console.log(data);
            _this.paymentDetails = data;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log(_this.id);
            _this.showloader = false;
        });
    };
    return EnrollmentComponent;
}());
EnrollmentComponent = __decorate([
    core_1.Component({
        selector: 'enrollment',
        templateUrl: 'app/candidate/candidateEnrollment.html',
        styleUrls: ['./app/candidate/candidate.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, candidate_service_1.CandidateService])
], EnrollmentComponent);
exports.EnrollmentComponent = EnrollmentComponent;
//# sourceMappingURL=candidate.enrollment.component.js.map