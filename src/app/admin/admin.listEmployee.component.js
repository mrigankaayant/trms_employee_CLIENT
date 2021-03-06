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
var admin_employee_service_1 = require("./admin.employee.service");
var ListEmployeeComponent = (function () {
    function ListEmployeeComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    ListEmployeeComponent.prototype.ngOnInit = function () {
    };
    ListEmployeeComponent.prototype.LazyLoadCandidate = function (event) {
        var _this = this;
        console.log(event);
        this.employeeService.getLazyEmployees(event).subscribe(function (response) {
            _this.employeeList = response.data;
            _this.totalRecord = response.totalRecord;
            console.log("Total Record:" + response.totalRecord);
        });
    };
    ListEmployeeComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['admin/employeeDetails', this.selectedEmployee.id]);
    };
    return ListEmployeeComponent;
}());
ListEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        templateUrl: 'app/admin/listEmployee.html'
    }),
    __metadata("design:paramtypes", [admin_employee_service_1.EmployeeService, router_1.Router])
], ListEmployeeComponent);
exports.ListEmployeeComponent = ListEmployeeComponent;
//# sourceMappingURL=admin.listEmployee.component.js.map