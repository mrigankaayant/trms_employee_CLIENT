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
var hr_router_1 = require("./hr.router");
var hr_component_1 = require("./hr.component");
var http_service_1 = require("../util/http.service");
var menu_component_1 = require("./menu.component");
//import { EditCandidateComponent } from './resourcing.editCandidate.component';
var primeng_1 = require("primeng/primeng");
var HrModule = (function () {
    function HrModule() {
    }
    return HrModule;
}());
HrModule = __decorate([
    core_1.NgModule({
        imports: [primeng_1.EditorModule, forms_1.FormsModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.PanelModule,
            primeng_1.InputMaskModule, primeng_1.RadioButtonModule, primeng_1.CalendarModule,
            primeng_1.PanelModule, primeng_1.FieldsetModule, primeng_1.DropdownModule, primeng_1.CheckboxModule, primeng_1.InputTextareaModule,
            primeng_1.FileUploadModule, primeng_1.MenubarModule, primeng_1.TabMenuModule,
            primeng_1.DataTableModule, primeng_1.SharedModule, http_1.HttpModule, forms_1.ReactiveFormsModule, primeng_1.AutoCompleteModule, primeng_1.TabViewModule,
            primeng_1.SplitButtonModule, common_1.CommonModule, hr_router_1.HrRoutingModule, primeng_1.ConfirmDialogModule
        ],
        declarations: [hr_component_1.HrComponent, menu_component_1.MenuComponent],
        providers: [http_service_1.HttpService, primeng_1.ConfirmationService,],
    })
], HrModule);
exports.HrModule = HrModule;
//# sourceMappingURL=hr.module.js.map