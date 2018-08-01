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
var resourcing_service_1 = require("./resourcing.service");
var candidate_model_1 = require("../model/candidate.model");
var add_candidate_model_1 = require("../model/add.candidate.model");
var dropdown_service_1 = require("../util/dropdown.service");
var social_media_model_1 = require("../model/social.media.model");
var createdby_model_1 = require("../model/createdby.model");
var ResourcingEditCandidateComponent = (function () {
    function ResourcingEditCandidateComponent(resourcingService, dropdownService, formBuilder, router, route) {
        this.resourcingService = resourcingService;
        this.dropdownService = dropdownService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.addCandidate = new add_candidate_model_1.AddCandidate();
        this.followupMsgs = [];
        this.personalMsgs = [];
        this.candidate = new candidate_model_1.Candidate();
    }
    ResourcingEditCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.showloader = true;
        this.showDialog = false;
        this.showButoon = false;
        this.candidate = new candidate_model_1.Candidate();
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.phones = new Array();
        this.candidate.createdBy = new createdby_model_1.CreatedBy();
        this.canSkills = this.dropdownService.skills;
        this.recStatusList = this.dropdownService.recruitmentStatus;
        this.visaList = this.dropdownService.candidateVisa;
        this.recSourceList = this.dropdownService.recrSource;
        this.payTypeList = this.dropdownService.candidatePayType;
        this.recruitmentServiceList = this.dropdownService.recruitmentServiceList;
        this.addFollowUpForm = this.formBuilder.group({
            'candidateId': this.id,
            'nextFollowUpDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'followupRemarks': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required]))
        });
        this.addCandidateForm = this.formBuilder.group({
            'candidateId': '',
            'candidateName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'payType': '',
            'email': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))])),
            'payRate': '',
            'alternateEmail': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
            'graduationDate': '',
            'workMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]{10}$")])),
            'currentLocation': '',
            'homeMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[0-9]{10}$")])),
            'visa': '',
            'visaStartDate': '',
            'recruitmentSource': '',
            'skill': '',
            'courseFee': '',
            'enrollmentStstus': '',
            'serviceName': '',
            'preferredLocations': this.formBuilder.array([
                this.initPreferredLocations()
            ])
        });
        this.resourcingService.getCandidatesList().subscribe(function (data) {
            _this.candidateList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.showloader = false;
        });
        this.resourcingService.findFollowUpListById(this.id).subscribe(function (data) {
            _this.followupList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.resourcingService.findCandidateByIdForUpdate(this.id).subscribe(function (data) {
            _this.addCandidate = new add_candidate_model_1.AddCandidate();
            _this.addCandidate = data;
            console.log("Candidate" + _this.addCandidate.serviceName);
            if (data.graduationDate != null) {
                _this.addCandidate.graduationDate = new Date(data.graduationDate);
            }
            if (data.enrollmentStstus == "Enrolled") {
                _this.showEnrollment = true;
                console.log("asasasasas   " + _this.showEnrollment);
            }
            else {
                _this.showEnrollment = false;
            }
            if (data.visaStartDate != null) {
                _this.addCandidate.visaStartDate = new Date(data.visaStartDate);
            }
            _this.addCandidateForm.patchValue(_this.addCandidate);
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
    };
    ResourcingEditCandidateComponent.prototype.initPreferredLocations = function () {
        return this.formBuilder.group({
            'location': ''
        });
    };
    ResourcingEditCandidateComponent.prototype.addPreferredLocations = function () {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.push(this.initPreferredLocations());
    };
    ResourcingEditCandidateComponent.prototype.removePreferredLocations = function (i) {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.removeAt(i);
    };
    ResourcingEditCandidateComponent.prototype.saveFollowUp = function () {
        var _this = this;
        var id;
        this.resourcingService.addFollowup(this.addFollowUpForm.value).subscribe(function (data) {
            id = data.candidateInfo.candidateId;
            _this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
        }, function (err) {
            _this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
        }, function () {
            _this.resourcingService.findFollowUpListById(id).subscribe(function (data) {
                _this.followupList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.addFollowUpForm.reset();
            });
        });
    };
    ResourcingEditCandidateComponent.prototype.updateCandidate = function () {
        var _this = this;
        console.log(this.addCandidateForm.value);
        this.addCandidate = this.addCandidateForm.value;
        var id;
        this.resourcingService.updateCandidate(this.addCandidateForm.value).subscribe(function (data) {
            id = data.candidateId;
            if (data.enrollmentStstus == "Enrolled") {
                _this.showEnrollment = true;
                console.log("asasasasas   " + _this.showEnrollment);
            }
            else {
                _this.showEnrollment = false;
            }
            _this.personalMsgs.push({ severity: 'success', summary: 'Success', detail: 'Candidate Successfully Updated' });
        }, function (err) {
            console.log(err.json().message);
            _this.personalMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Candidate Successfully Not Updated' });
        }, function () {
            _this.resourcingService.getCandidatesList().subscribe(function (data) {
                _this.candidateList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        });
    };
    /*lazyLoadCandidate(event: LazyLoadEvent) {
        //this.candidateList = [];
        this.resourcingService.getLazyCandidate(event).subscribe(
            response => {
                this.candidateList = response.data;
                this.totalRecord = response.totalRecord;
            })
    }*/
    ResourcingEditCandidateComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        console.log("Candidate Id" + this.selectedCandidate.candidateId);
        this.id = this.selectedCandidate.candidateId;
        this.resourcingService.findFollowUpListById(this.selectedCandidate.candidateId).subscribe(function (data) {
            _this.followupList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.resourcingService.findCandidateByIdForUpdate(this.selectedCandidate.candidateId).subscribe(function (data) {
            _this.addCandidate = new add_candidate_model_1.AddCandidate();
            _this.addCandidate = data;
            console.log("Date" + _this.addCandidate.serviceName);
            if (data.graduationDate != null) {
                _this.addCandidate.graduationDate = new Date(data.graduationDate);
            }
            if (data.enrollmentStstus == "Enrolled") {
                _this.showEnrollment = true;
                console.log("asasasasas2 " + _this.showEnrollment);
            }
            else {
                _this.showEnrollment = false;
            }
            if (data.visaStartDate != null) {
                _this.addCandidate.visaStartDate = new Date(data.visaStartDate);
            }
            _this.addCandidateForm.patchValue(_this.addCandidate);
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
    };
    ResourcingEditCandidateComponent.prototype.checkEmail = function (email) {
        var _this = this;
        if (email.length) {
            this.resourcingService.checkEmail(btoa(email), this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = true;
                        _this.candidate = data;
                        _this.addCandidateForm.controls['email'].setErrors({ 'incorrect': true });
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    console.log("validate enter");
                    _this.addCandidateForm.controls['email'].setValidators([forms_1.Validators.required, forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))]),
                        _this.showDialog = false;
                    _this.showButoon = false;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingEditCandidateComponent.prototype.checkAlternateEmail = function (email) {
        var _this = this;
        if (email.length) {
            this.resourcingService.checkEmail(btoa(email), this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = true;
                        _this.candidate = data;
                        _this.addCandidateForm.controls['alternateEmail'].setErrors({ 'incorrect': true });
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    console.log("validate enter");
                    _this.addCandidateForm.controls['alternateEmail'].setValidators([forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))]),
                        _this.showDialog = false;
                    _this.showButoon = false;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingEditCandidateComponent.prototype.checkMobile = function (mobile) {
        var _this = this;
        if (mobile.length) {
            this.resourcingService.checkMobile(mobile, this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = false;
                        _this.addCandidateForm.controls['workMobile'].setErrors({ 'incorrect': true });
                        _this.candidate = data;
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    _this.addCandidateForm.controls['workMobile'].setValidators([forms_1.Validators.required, forms_1.Validators.pattern(("^[0-9]{10}$"))]),
                        _this.showDialog = false;
                    _this.showButoon = false;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingEditCandidateComponent.prototype.checkHomeMobile = function (mobile) {
        var _this = this;
        if (mobile.length) {
            this.resourcingService.checkMobile(mobile, this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = false;
                        _this.addCandidateForm.controls['homeMobile'].setErrors({ 'incorrect': true });
                        _this.candidate = data;
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    _this.addCandidateForm.controls['homeMobile'].setValidators([forms_1.Validators.pattern(("^[0-9]{10}$"))]),
                        _this.showDialog = false;
                    _this.showButoon = true;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    return ResourcingEditCandidateComponent;
}());
ResourcingEditCandidateComponent = __decorate([
    core_1.Component({
        selector: 'resourcing-edit',
        templateUrl: 'app/recruitment/resourcing.editCandidate.html',
    }),
    __metadata("design:paramtypes", [resourcing_service_1.ResourcingService, dropdown_service_1.DropdownService, forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
], ResourcingEditCandidateComponent);
exports.ResourcingEditCandidateComponent = ResourcingEditCandidateComponent;
//# sourceMappingURL=resourcing.editCandidate.component.js.map