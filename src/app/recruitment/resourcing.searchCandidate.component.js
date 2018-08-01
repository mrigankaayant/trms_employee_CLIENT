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
var SearchCandidateComponent = (function () {
    function SearchCandidateComponent(formBuilder, resourcingService, router) {
        this.formBuilder = formBuilder;
        this.resourcingService = resourcingService;
        this.router = router;
    }
    SearchCandidateComponent.prototype.ngOnInit = function () {
        this.showDataTablePanel = false;
        this.showNoaData = false;
        this.showText = true;
        this.searchCandidateForm = this.formBuilder.group({
            'searchValue': ''
        });
    };
    SearchCandidateComponent.prototype.searchCandidate = function () {
        var _this = this;
        this.resourcingService.getSearchCandidate(this.searchCandidateForm.value).subscribe(function (data) {
            _this.candidateList = data;
            if (_this.candidateList == null) {
                _this.showDataTablePanel = false;
                _this.showNoaData = true;
                _this.showText = false;
            }
            else {
                if (_this.candidateList.length > 0) {
                    _this.showDataTablePanel = true;
                    _this.showNoaData = false;
                    _this.showText = false;
                }
                else {
                    _this.showDataTablePanel = false;
                    _this.showNoaData = true;
                    _this.showText = false;
                }
            }
        }, function (err) {
            console.log(err.json().message);
        }, function () {
        });
    };
    return SearchCandidateComponent;
}());
SearchCandidateComponent = __decorate([
    core_1.Component({
        selector: 'resourcingCandidateSearch',
        templateUrl: 'app/recruitment/resourcing.searchCandidate.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        resourcing_service_1.ResourcingService, router_1.Router])
], SearchCandidateComponent);
exports.SearchCandidateComponent = SearchCandidateComponent;
//# sourceMappingURL=resourcing.searchCandidate.component.js.map