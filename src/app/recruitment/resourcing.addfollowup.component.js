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
var CandidateFollowUpComponent = (function () {
    function CandidateFollowUpComponent(formBuilder, route, router, resourcingService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.resourcingService = resourcingService;
        //hideCandidateForm: boolean;
        //showFollowForm: boolean;
        //editFollowForm: boolean;
        //updateCandidateForm: boolean;
        //isFollowUp:boolean;
        //isFollowUpDetails:boolean;
        //followupCandidateInfo:FollowupCandidateInfo = new FollowupCandidateInfo();
        this.candidate = new candidate_model_1.Candidate();
        //this.showFollowForm = true; 
        //this.editFollowForm = true;
        //this.updateCandidateForm = false;
        //this.isFollowUp = false;
        //this.isFollowUpDetails = true;
    }
    CandidateFollowUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showloader = true;
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.preferredLocations = [];
        this.candidate.immigrations = [];
        this.candidate.candidateCourses = [];
        this.candidate.phones = [];
        //this.resourcingService.getCandidatesList().subscribe(response => this.candidateList = response,error => console.log(error));
        /*this.resourcingService.getCandidatesList().subscribe(
         response => {
            this.candidateList = response
         },
         err => {
                console.log(err.json().message)
         },
        () => {
             this.showloader = false;
        }
        );*/
        var id = this.route.snapshot.params["id"];
        this.addFollowUpForm = this.formBuilder.group({
            'candidateId': id,
            'nextFollowUpDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'followupRemarks': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required]))
        });
        this.resourcingService.findCandidateByIdForshow(id).subscribe(function (data) {
            _this.candidate = new candidate_model_1.Candidate();
            _this.candidate = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.showloader = false;
            console.log('Authentication Complete');
        });
    };
    CandidateFollowUpComponent.prototype.saveFollowUp = function () {
        var _this = this;
        var id;
        this.showloader = true;
        this.resourcingService.addFollowup(this.addFollowUpForm.value).subscribe(function (data) {
            id = data.candidateInfo.candidateId;
        }, function (err) {
        }, function () {
            _this.showloader = false;
            _this.router.navigate(['recruitment/showCandidateFollowupDetails', id]);
        });
    };
    CandidateFollowUpComponent.prototype.lazyLoadCandidate = function (event) {
        //this.candidateList = [];
        /*this.resourcingService.getLazyCandidate(event).subscribe(
            response => {
                this.candidateList = response.data;
                this.totalRecord = response.totalRecord;
            })*/
    };
    return CandidateFollowUpComponent;
}());
CandidateFollowUpComponent = __decorate([
    core_1.Component({
        selector: 'resourcingFollowUp',
        templateUrl: "app/recruitment/resourcing.addfollowup.html",
        styleUrls: ['app/recruitment/recruitment.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, resourcing_service_1.ResourcingService])
], CandidateFollowUpComponent);
exports.CandidateFollowUpComponent = CandidateFollowUpComponent;
//# sourceMappingURL=resourcing.addfollowup.component.js.map