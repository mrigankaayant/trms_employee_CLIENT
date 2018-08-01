"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Company',
                icon: 'fa fa-th',
                items: [{
                        label: 'Employee',
                        icon: 'fa fa-user',
                        items: [
                            { label: 'Add', icon: 'fa-plus', routerLink: ['/admin/addEmployee'] },
                            { label: 'List', icon: 'fa-align-justify', routerLink: ['/admin/listEmployee'] }
                        ]
                    },
                    {
                        label: 'Payroll Group',
                        icon: 'fa fa-users',
                        items: [
                            { label: 'Add', icon: 'fa-plus', routerLink: ['/admin/addPayrollGroup'] },
                            { label: 'List', icon: 'fa-align-justify', routerLink: ['/admin/payrollGroupList'] }
                        ]
                    }
                ]
            },
            {
                label: 'Declaration',
                icon: 'fa fa-hand-o-up',
                items: [
                    { label: 'HRA Declaration', icon: 'fa fa-hand-o-right' },
                    { label: 'TAX Declaration', icon: 'fa fa-hand-o-right' }
                ]
            },
            {
                label: 'Tax',
                icon: 'fa fa-inr',
                items: [
                    { label: 'Professional Tax', icon: 'fa fa-paper-plane', routerLink: ['/admin/professionalTaxList'] },
                    { label: 'Tax Payer Group', icon: 'fa fa-paper-plane', routerLink: ['/admin/taxPayerGroupList'] },
                    { label: 'Income Tax', icon: 'fa fa-paper-plane', routerLink: ['/admin/incomeTaxList'] },
                    { label: 'Icome Tax Exemption', icon: 'fa fa-paper-plane', routerLink: ['/admin/incomeTaxExemptionList'] }
                ]
            },
            {
                label: 'Payslip',
                icon: 'fa fa-file-pdf-o',
                items: [
                    { label: 'Generate', icon: 'fa fa-history' }
                ]
            },
            {
                label: 'Report',
                icon: 'fa fa-bar-chart',
                items: [
                    { label: 'Monthly', icon: 'fa fa-calendar' }
                ]
            }
        ];
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        templateUrl: 'app/admin/menu.html'
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=admin.menu.component.js.map