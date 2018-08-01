"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var resourcing_router_1 = require("./resourcing.router");
var resourcing_list_component_1 = require("./resourcing.list.component");
var resourcing_service_1 = require("./resourcing.service");
var http_service_1 = require("../util/http.service");
var resourcing_addfollowup_component_1 = require("./resourcing.addfollowup.component");
var menu_component_1 = require("./menu.component");
var dropdown_service_1 = require("../util/dropdown.service");
var resourcing_showCandodateFollowUpDetails_component_1 = require("./resourcing.showCandodateFollowUpDetails.component");
var resourcing_editCandidate_component_1 = require("./resourcing.editCandidate.component");
var resourcing_searchCandidate_component_1 = require("./resourcing.searchCandidate.component");
var resourcing_freepool_component_1 = require("./resourcing.freepool.component");
var resourcing_freepool_candidate_edit_component_1 = require("./resourcing.freepool.candidate.edit.component");
var resorcung_addnewCandidateComponent_1 = require("./resorcung.addnewCandidateComponent");
var resourcing_call_history_component_1 = require("./resourcing.call.history.component");
var incentive_list_component_1 = require("./incentive.list.component");
var employee_incentive_calculation_component_1 = require("./employee.incentive.calculation.component");
var primeng_1 = require("primeng/primeng");
var ResourceModule = (function () {
    function ResourceModule() {
    }
    return ResourceModule;
}());
ResourceModule = __decorate([
    core_1.NgModule({
        imports: [primeng_1.EditorModule, forms_1.FormsModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.PanelModule, primeng_1.DialogModule, primeng_1.MultiSelectModule,
            primeng_1.InputMaskModule, primeng_1.RadioButtonModule, primeng_1.CalendarModule,
            primeng_1.PanelModule, primeng_1.FieldsetModule, primeng_1.DropdownModule, primeng_1.CheckboxModule, primeng_1.InputTextareaModule,
            primeng_1.FileUploadModule, primeng_1.MenubarModule, primeng_1.TabMenuModule,
            primeng_1.DataTableModule, primeng_1.SharedModule, http_1.HttpModule, forms_1.ReactiveFormsModule, primeng_1.AutoCompleteModule, primeng_1.TabViewModule,
            primeng_1.SplitButtonModule, common_1.CommonModule, primeng_1.ChartModule, resourcing_router_1.ResourcingRoutingModule, primeng_1.ConfirmDialogModule, primeng_1.ContextMenuModule, primeng_1.SidebarModule
        ],
        declarations: [resourcing_call_history_component_1.CallHistoryComponent, resourcing_searchCandidate_component_1.SearchCandidateComponent,
            resourcing_editCandidate_component_1.ResourcingEditCandidateComponent, resourcing_list_component_1.ResourcingComponent,
            resourcing_addfollowup_component_1.CandidateFollowUpComponent, menu_component_1.MenuComponent, resourcing_showCandodateFollowUpDetails_component_1.ShowCandidateFollowUpDetails,
            resourcing_freepool_component_1.FreePoolComponent, resourcing_freepool_candidate_edit_component_1.EditFreepoolCandidateComponent, resorcung_addnewCandidateComponent_1.AddCandidateComponent,
            incentive_list_component_1.IncentiveListComponent, employee_incentive_calculation_component_1.EmployeeIncentive],
        providers: [resourcing_service_1.ResourcingService, http_service_1.HttpService, primeng_1.ConfirmationService, dropdown_service_1.DropdownService],
    })
], ResourceModule);
exports.ResourceModule = ResourceModule;
//# sourceMappingURL=resourcing.module.js.map