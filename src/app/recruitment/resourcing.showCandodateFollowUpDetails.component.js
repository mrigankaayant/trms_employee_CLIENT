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
var candidate_show_model_1 = require("../model/candidate.show.model");
var social_media_model_1 = require("../model/social.media.model");
var resourcing_service_1 = require("./resourcing.service");
var ShowCandidateFollowUpDetails = (function () {
    //candidateList: Candidate[];
    function ShowCandidateFollowUpDetails(router, route, resourcingService) {
        this.router = router;
        this.route = route;
        this.resourcingService = resourcingService;
    }
    ShowCandidateFollowUpDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.showloader = true;
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
        this.candidate = new candidate_show_model_1.CandidateShow();
        this.candidate.candidateCourses = new Array();
        this.candidate.preferredLocations = new Array();
        this.candidate.immigrations = new Array();
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.phones = new Array();
        this.resourcingService.findCandidateByIdForshow(id).subscribe(function (data) {
            _this.candidate = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            console.log('Authentication Complete');
            _this.resourcingService.findFollowUpListById(id).subscribe(function (data) {
                _this.followUps = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                console.log('Authentication Complete' + _this.followUps.length);
                _this.showloader = false;
            });
        });
    };
    return ShowCandidateFollowUpDetails;
}());
ShowCandidateFollowUpDetails = __decorate([
    core_1.Component({
        selector: 'resourcingShowCandidateDetails',
        templateUrl: 'app/recruitment/showCandidateFollowupDetails.html',
        styleUrls: ['./app/recruitment/recruitment.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, resourcing_service_1.ResourcingService])
], ShowCandidateFollowUpDetails);
exports.ShowCandidateFollowUpDetails = ShowCandidateFollowUpDetails;
//# sourceMappingURL=resourcing.showCandodateFollowUpDetails.component.js.map