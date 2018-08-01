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
var HrComponent = (function () {
    function HrComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    HrComponent.prototype.ngOnInit = function () {
        this.addCandidateForm = this.formBuilder.group({
            'candidateCode': '',
            'firstName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z]*")])),
            'payType': '',
            'email': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))])),
            'payRate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("[1-9][0-9]*|0")])),
            'altEmail': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
            'graduationDate': '',
            'wrkMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]{10}$")])),
            'currLocation': '',
            'homeMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[0-9]{10}$")])),
            'prefLoc': '',
            'recSource': '',
            'skill': '',
            'visa': '',
            'fee': '',
            'visaStartDate': '',
            'recStatus': ''
        });
        this.addFollowUpForm = this.formBuilder.group({
            'remrks': '',
            'nxtFollowUpDate': ''
        });
    };
    HrComponent.prototype.lazyLoadCandidate = function (event) {
        //this.candidateList = [];
        /*this.resourcingService.getLazyCandidate(event).subscribe(
            response => {
                this.candidateList = response.data;
                this.totalRecord = response.totalRecord;
            })*/
    };
    HrComponent.prototype.onRowSelect = function (event) {
        document.getElementById("dt-table").style.width = "58.3333%";
    };
    HrComponent.prototype.saveCandidate = function () {
        //this.router.navigate(['recruitment/showFollowUpDetails']);
    };
    HrComponent.prototype.editFollowUp = function () {
        this.showFollowForm = false;
        this.updateCandidateForm = true;
    };
    HrComponent.prototype.updateCandidate = function () {
    };
    HrComponent.prototype.goToLogin = function () {
        sessionStorage.clear();
        this.router.navigate(['login']);
    };
    return HrComponent;
}());
HrComponent = __decorate([
    core_1.Component({
        selector: 'hr',
        templateUrl: 'app/hr/hr.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router])
], HrComponent);
exports.HrComponent = HrComponent;
//# sourceMappingURL=hr.component.js.map