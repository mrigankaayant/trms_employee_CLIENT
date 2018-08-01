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
var admin_component_1 = require("./admin.component");
var admin_addEmployee_component_1 = require("./admin.addEmployee.component");
var admin_payrollGroupView_component_1 = require("./admin.payrollGroupView.component");
var admin_incomeTaxListComponent_1 = require("./admin.incomeTaxListComponent");
var admin_editEmployeeComponent_1 = require("./admin.editEmployeeComponent");
var admin_editPayrollGroup_component_1 = require("./admin.editPayrollGroup.component");
var admin_showEmployeeDetails_component_1 = require("./admin.showEmployeeDetails.component");
var admin_listEmployee_component_1 = require("./admin.listEmployee.component");
var admin_payrollGroupList_component_1 = require("./admin.payrollGroupList.component");
var admin_professional_component_1 = require("./admin.professional.component");
var admin_menu_component_1 = require("./admin.menu.component");
var AdminRoutingModule_1 = require("./AdminRoutingModule");
var admin_professionalTaxService_component_1 = require("./admin.professionalTaxService.component");
var admin_payrollGroupAddComponent_1 = require("./admin.payrollGroupAddComponent");
var admin_taxpayergroup_component_1 = require("./admin.taxpayergroup.component");
var admin_taxPayerGroup_service_1 = require("./admin.taxPayerGroup.service");
var admin_employee_service_1 = require("./admin.employee.service");
var admin_payrollgroupService_1 = require("./admin.payrollgroupService");
var admin_country_service_1 = require("./admin.country.service");
var admin_state_service_1 = require("./admin.state.service");
var admin_city_service_1 = require("./admin.city.service");
var http_service_1 = require("../util/http.service");
var admin_incomeTax_service_1 = require("./admin.incomeTax.service");
var primeng_1 = require("primeng/primeng");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.PanelModule, primeng_1.DialogModule,
            primeng_1.InputMaskModule, primeng_1.RadioButtonModule, primeng_1.CalendarModule,
            primeng_1.PanelModule, primeng_1.FieldsetModule, primeng_1.DropdownModule, primeng_1.CheckboxModule, primeng_1.InputTextareaModule,
            primeng_1.FileUploadModule, primeng_1.MenubarModule, primeng_1.TabMenuModule,
            primeng_1.DataTableModule, primeng_1.SharedModule, http_1.HttpModule, forms_1.ReactiveFormsModule, primeng_1.AutoCompleteModule, primeng_1.TabViewModule,
            primeng_1.SplitButtonModule, common_1.CommonModule, AdminRoutingModule_1.AdminRoutingModule
        ],
        declarations: [admin_component_1.AdminComponent, admin_addEmployee_component_1.AddEmployeeComponent, admin_payrollGroupAddComponent_1.PayrollGroupAddComponent, admin_showEmployeeDetails_component_1.ShowEmployeeComponent, admin_editEmployeeComponent_1.EditEmployeeComponent, admin_incomeTaxListComponent_1.IncomeTaxComponent,
            admin_listEmployee_component_1.ListEmployeeComponent, admin_menu_component_1.MenuComponent, admin_professional_component_1.ProfessionalTaxComponent, admin_taxpayergroup_component_1.TaxPayerGroupComponent, admin_payrollGroupList_component_1.PayrollGroupListComponent,
            admin_editPayrollGroup_component_1.PayrollGroupEditComponent, admin_payrollGroupView_component_1.PayrollGroupViewComponent],
        providers: [admin_professionalTaxService_component_1.ProfessionalTaxService, http_service_1.HttpService, admin_taxPayerGroup_service_1.TaxPayerGroupService, admin_employee_service_1.EmployeeService, admin_payrollgroupService_1.PayrollGroupService, admin_country_service_1.CountryService, admin_state_service_1.StateService, admin_city_service_1.CityService, admin_incomeTax_service_1.IncomeTaxService],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map