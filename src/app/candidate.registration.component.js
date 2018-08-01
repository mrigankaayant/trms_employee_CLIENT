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
var candidate_registration_service_1 = require("./candidate.registration.service");
var CandidateRegistration = (function () {
    function CandidateRegistration(formBuilder, route, router, candidateRegistrationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.candidateRegistrationService = candidateRegistrationService;
    }
    CandidateRegistration.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        console.log("Candidate Id" + this.id);
        //this.visaList = this.dropdownService.candidateVisa;
        this.gender = [
            { label: 'Select Visa', value: null },
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' }
        ];
        this.candidateRegistrationService.getVisas().subscribe(function (data) {
            _this.visaList = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var e = data_1[_i];
                _this.visaList.push({ label: e.name, value: e.name });
            }
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.addCandidateForm = this.formBuilder.group({
            'candidateName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'dateOfBirth': '',
            'gender': '',
            'graduationDate': '',
            'email': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))])),
            'alternateEmail': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
            'workMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]{10}$")])),
            'homeMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[0-9]{10}$")])),
            'country': '',
            'state': '',
            'city': '',
            'zip': '',
            'currentLocation': '',
            'visa': '',
            'visaStartDate': '',
            'serviceName': '',
            'preferredLocations': this.formBuilder.array([
                this.initPreferredLocations()
            ]),
        });
    };
    CandidateRegistration.prototype.initPreferredLocations = function () {
        return this.formBuilder.group({
            'location': ''
        });
    };
    CandidateRegistration.prototype.addPreferredLocations = function () {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.push(this.initPreferredLocations());
    };
    CandidateRegistration.prototype.removePreferredLocations = function (i) {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.removeAt(i);
    };
    return CandidateRegistration;
}());
CandidateRegistration = __decorate([
    core_1.Component({
        selector: 'hr',
        templateUrl: 'app/candidateRegistration.html',
        styleUrls: ['app/app.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, typeof (_a = typeof candidate_registration_service_1.CandidateRegistrationService !== "undefined" && candidate_registration_service_1.CandidateRegistrationService) === "function" && _a || Object])
], CandidateRegistration);
exports.CandidateRegistration = CandidateRegistration;
var _a;
//# sourceMappingURL=candidate.registration.component.js.map