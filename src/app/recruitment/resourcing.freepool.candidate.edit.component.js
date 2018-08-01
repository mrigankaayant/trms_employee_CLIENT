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
var dropdown_service_1 = require("../util/dropdown.service");
var resourcing_service_1 = require("./resourcing.service");
var add_candidate_model_1 = require("../model/add.candidate.model");
var EditFreepoolCandidateComponent = (function () {
    function EditFreepoolCandidateComponent(resourcingService, dropdownService, formBuilder, router, route) {
        this.resourcingService = resourcingService;
        this.dropdownService = dropdownService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.followupMsgs = [];
        this.candidate = new add_candidate_model_1.AddCandidate();
    }
    EditFreepoolCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.candidate = new add_candidate_model_1.AddCandidate();
        this.selectedCandidateInFreepool = null;
        this.resourcingService.findFreePoolCandidates().subscribe(function (data) {
            _this.candidateListInFreepool = data;
            console.log(_this.candidateListInFreepool);
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.followUpFormForFreepool = this.formBuilder.group({
            'candidateId': id,
            'nextFollowUpDate': '',
            'followupRemarks': ''
        });
        this.resourcingService.findFollowUpListById(id).subscribe(function (data) {
            _this.candidateFollowupList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.resourcingService.findCandidateByIdForUpdate(id).subscribe(function (data) {
            _this.candidate = new add_candidate_model_1.AddCandidate();
            _this.candidate = data;
            //if (data.graduationDate != null) {
            //this.selectedAddcandidate.graduationDate = new Date(data.graduationDate);
            //}
            //if (data.visaStartDate != null) {
            //   this.selectedAddcandidate.visaStartDate = new Date(data.visaStartDate);
            //}
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
    };
    EditFreepoolCandidateComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        var id;
        id = this.selectedCandidateInFreepool.candidateId;
        this.resourcingService.findFollowUpListById(id).subscribe(function (data) {
            _this.candidateFollowupList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
        this.resourcingService.findCandidateByIdForUpdate(id).subscribe(function (data) {
            _this.candidate = new add_candidate_model_1.AddCandidate();
            _this.candidate = data;
            //if (data.graduationDate != null) {
            //this.selectedAddcandidate.graduationDate = new Date(data.graduationDate);
            //}
            //if (data.visaStartDate != null) {
            //   this.selectedAddcandidate.visaStartDate = new Date(data.visaStartDate);
            //}
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
    };
    EditFreepoolCandidateComponent.prototype.saveFollowUp = function () {
        var _this = this;
        var id;
        this.resourcingService.addFollowupForFreepool(this.followUpFormForFreepool.value).subscribe(function (data) {
            id = data.candidateInfo.candidateId;
            _this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
        }, function (err) {
            _this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
        }, function () {
            _this.followUpFormForFreepool.reset();
            _this.resourcingService.findFollowUpListById(id).subscribe(function (data) {
                _this.candidateFollowupList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
            _this.resourcingService.findFreePoolCandidates().subscribe(function (data) {
                _this.candidateListInFreepool = data;
                console.log(_this.candidateListInFreepool);
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        });
    };
    return EditFreepoolCandidateComponent;
}());
EditFreepoolCandidateComponent = __decorate([
    core_1.Component({
        selector: 'resourcing-edit-freepool',
        templateUrl: 'app/recruitment/resourcing.editFreepoolCandidate.html',
    }),
    __metadata("design:paramtypes", [resourcing_service_1.ResourcingService, dropdown_service_1.DropdownService, forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
], EditFreepoolCandidateComponent);
exports.EditFreepoolCandidateComponent = EditFreepoolCandidateComponent;
//# sourceMappingURL=resourcing.freepool.candidate.edit.component.js.map