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
var account_router_1 = require("./account.router");
var http_service_1 = require("../util/http.service");
var menu_component_1 = require("./menu.component");
var dropdown_service_1 = require("../util/dropdown.service");
var account_service_1 = require("./account.service");
var paid_candidate_component_1 = require("./paid.candidate.component");
var incentive_component_1 = require("./incentive.component");
var logout_component_1 = require("./logout.component");
var primeng_1 = require("primeng/primeng");
var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    core_1.NgModule({
        imports: [primeng_1.EditorModule, forms_1.FormsModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.PanelModule, primeng_1.DialogModule, primeng_1.MultiSelectModule,
            primeng_1.InputMaskModule, primeng_1.RadioButtonModule, primeng_1.CalendarModule,
            primeng_1.PanelModule, primeng_1.FieldsetModule, primeng_1.DropdownModule, primeng_1.CheckboxModule, primeng_1.InputTextareaModule,
            primeng_1.FileUploadModule, primeng_1.MenubarModule, primeng_1.TabMenuModule,
            primeng_1.DataTableModule, primeng_1.SharedModule, http_1.HttpModule, forms_1.ReactiveFormsModule, primeng_1.AutoCompleteModule, primeng_1.TabViewModule,
            primeng_1.SplitButtonModule, common_1.CommonModule, primeng_1.ChartModule, primeng_1.ConfirmDialogModule, primeng_1.ContextMenuModule, primeng_1.SidebarModule, account_router_1.AccountRoutingModule
        ],
        declarations: [menu_component_1.MenuComponent, paid_candidate_component_1.PaidCandidateComponent, incentive_component_1.IncenTiveComponent, logout_component_1.LogOutComponent],
        providers: [http_service_1.HttpService, dropdown_service_1.DropdownService, account_service_1.AccountService]
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map