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
var social_media_model_1 = require("../model/social.media.model");
var createdby_model_1 = require("../model/createdby.model");
var FreePoolComponent = (function () {
    function FreePoolComponent(formBuilder, resourcingService, router) {
        this.formBuilder = formBuilder;
        this.resourcingService = resourcingService;
        this.router = router;
        this.followupMsgs = [];
    }
    FreePoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidateViewSidebar = false;
        this.viewDetailsLoader = false;
        this.candidatePullSidebar = false;
        this.candidatePullLoader = false;
        this.followupList = [];
        this.candidate = new candidate_model_1.Candidate();
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.phones = new Array();
        this.candidate.createdBy = new createdby_model_1.CreatedBy();
        this.canId = null;
        this.followupMsgs = [];
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCandidate(_this.selectedFreepoolCandidate); } },
            { label: 'Pull', icon: 'fa-edit', command: function (event) { return _this.getCandidate(_this.selectedFreepoolCandidate); } }
        ];
        this.resourcingService.findFreePoolCandidates().subscribe(function (data) {
            _this.freePoolCandidateList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.addFollowUpForm = this.formBuilder.group({
            'candidateId': '',
            'nextFollowUpDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'followupRemarks': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required]))
        });
    };
    FreePoolComponent.prototype.getCandidate = function (maxFollowup) {
        var _this = this;
        this.candidatePullSidebar = true;
        this.candidatePullLoader = true;
        this.canId = maxFollowup.candidateId;
        this.resourcingService.findCandidateByIdForshow(maxFollowup.candidateId).subscribe(function (data) {
            _this.candidate = data;
            console.log(_this.candidate);
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.candidatePullLoader = false;
        });
    };
    FreePoolComponent.prototype.viewCandidate = function (maxFollowup) {
        var _this = this;
        this.candidateViewSidebar = true;
        this.viewDetailsLoader = true;
        this.resourcingService.findCandidateByIdForshow(maxFollowup.candidateId).subscribe(function (data) {
            _this.candidate = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.resourcingService.findFollowUpListById(maxFollowup.candidateId).subscribe(function (data) {
                _this.followupList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.viewDetailsLoader = false;
            });
        });
    };
    FreePoolComponent.prototype.saveFollowUp = function () {
        var _this = this;
        this.followupMsgs = [];
        this.addFollowUpForm.controls['candidateId'].setValue(this.canId);
        this.resourcingService.updateFollowupForFreepool(this.addFollowUpForm.value).subscribe(function (data) {
            console.log(data);
            _this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
        }, function (err) {
            _this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
        }, function () {
            _this.resourcingService.findFreePoolCandidates().subscribe(function (data) {
                _this.freePoolCandidateList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        });
    };
    return FreePoolComponent;
}());
FreePoolComponent = __decorate([
    core_1.Component({
        selector: 'resourcing',
        templateUrl: 'app/recruitment/resourcing.freepoolCandidate.html',
        styleUrls: ['./app/recruitment/recruitment.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, resourcing_service_1.ResourcingService, router_1.Router])
], FreePoolComponent);
exports.FreePoolComponent = FreePoolComponent;
//# sourceMappingURL=resourcing.freepool.component.js.map