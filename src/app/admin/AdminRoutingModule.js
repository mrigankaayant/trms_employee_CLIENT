"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin.component");
var admin_addEmployee_component_1 = require("./admin.addEmployee.component");
var admin_showEmployeeDetails_component_1 = require("./admin.showEmployeeDetails.component");
var admin_listEmployee_component_1 = require("./admin.listEmployee.component");
var admin_professional_component_1 = require("./admin.professional.component");
var admin_taxpayergroup_component_1 = require("./admin.taxpayergroup.component");
var admin_editEmployeeComponent_1 = require("./admin.editEmployeeComponent");
var admin_incomeTaxListComponent_1 = require("./admin.incomeTaxListComponent");
var admin_payrollGroupAddComponent_1 = require("./admin.payrollGroupAddComponent");
var admin_payrollGroupList_component_1 = require("./admin.payrollGroupList.component");
var admin_editPayrollGroup_component_1 = require("./admin.editPayrollGroup.component");
var admin_payrollGroupView_component_1 = require("./admin.payrollGroupView.component");
var router = [
    { path: '', component: admin_component_1.AdminComponent },
    { path: 'addEmployee', component: admin_addEmployee_component_1.AddEmployeeComponent },
    { path: 'listEmployee', component: admin_listEmployee_component_1.ListEmployeeComponent },
    { path: 'professionalTaxList', component: admin_professional_component_1.ProfessionalTaxComponent },
    { path: 'taxPayerGroupList', component: admin_taxpayergroup_component_1.TaxPayerGroupComponent },
    { path: 'showEmployeeDetails/:id', component: admin_showEmployeeDetails_component_1.ShowEmployeeComponent },
    { path: 'employeeDetails/:id', component: admin_editEmployeeComponent_1.EditEmployeeComponent },
    { path: 'incomeTaxList', component: admin_incomeTaxListComponent_1.IncomeTaxComponent },
    { path: 'addPayrollGroup', component: admin_payrollGroupAddComponent_1.PayrollGroupAddComponent },
    { path: 'payrollGroupList', component: admin_payrollGroupList_component_1.PayrollGroupListComponent },
    { path: 'payrollDetails/:id', component: admin_editPayrollGroup_component_1.PayrollGroupEditComponent },
    { path: 'payrollGroupView/:id', component: admin_payrollGroupView_component_1.PayrollGroupViewComponent },
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(router)],
        exports: [router_1.RouterModule]
    })
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=AdminRoutingModule.js.map