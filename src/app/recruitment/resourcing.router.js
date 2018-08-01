"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resourcing_list_component_1 = require("./resourcing.list.component");
var resourcing_addfollowup_component_1 = require("./resourcing.addfollowup.component");
var resourcing_showCandodateFollowUpDetails_component_1 = require("./resourcing.showCandodateFollowUpDetails.component");
var resourcing_editCandidate_component_1 = require("./resourcing.editCandidate.component");
var resourcing_searchCandidate_component_1 = require("./resourcing.searchCandidate.component");
var resourcing_freepool_component_1 = require("./resourcing.freepool.component");
var resourcing_freepool_candidate_edit_component_1 = require("./resourcing.freepool.candidate.edit.component");
var resorcung_addnewCandidateComponent_1 = require("./resorcung.addnewCandidateComponent");
var resourcing_call_history_component_1 = require("./resourcing.call.history.component");
var incentive_list_component_1 = require("./incentive.list.component");
var employee_incentive_calculation_component_1 = require("./employee.incentive.calculation.component");
var router = [
    { path: '', redirectTo: 'listCandidate', pathMatch: 'full' },
    { path: 'listCandidate', component: resourcing_list_component_1.ResourcingComponent },
    { path: 'showFollowUpDetails/:id', component: resourcing_addfollowup_component_1.CandidateFollowUpComponent },
    { path: 'showCandidateFollowupDetails/:id', component: resourcing_showCandodateFollowUpDetails_component_1.ShowCandidateFollowUpDetails },
    { path: 'editCandidate/:id', component: resourcing_editCandidate_component_1.ResourcingEditCandidateComponent },
    { path: 'searchCandidate', component: resourcing_searchCandidate_component_1.SearchCandidateComponent },
    { path: 'freepoolcandidate', component: resourcing_freepool_component_1.FreePoolComponent },
    { path: 'editFreepoolCandidate/:id', component: resourcing_freepool_candidate_edit_component_1.EditFreepoolCandidateComponent },
    { path: 'addCandidate', component: resorcung_addnewCandidateComponent_1.AddCandidateComponent },
    { path: 'callHistory', component: resourcing_call_history_component_1.CallHistoryComponent },
    { path: 'incentiveList', component: incentive_list_component_1.IncentiveListComponent },
    { path: 'incentive', component: employee_incentive_calculation_component_1.EmployeeIncentive }
];
var ResourcingRoutingModule = (function () {
    function ResourcingRoutingModule() {
    }
    return ResourcingRoutingModule;
}());
ResourcingRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(router)],
        exports: [router_1.RouterModule]
    })
], ResourcingRoutingModule);
exports.ResourcingRoutingModule = ResourcingRoutingModule;
//# sourceMappingURL=resourcing.router.js.map