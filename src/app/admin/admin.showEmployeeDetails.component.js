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
var employee_model_1 = require("./model/employee.model");
var payrollGroup_model_1 = require("./model/payrollGroup.model");
var country_model_1 = require("./model/country.model");
var state_model_1 = require("./model/state.model");
var city_model_1 = require("./model/city.model");
var ShowEmployeeComponent = (function () {
    function ShowEmployeeComponent(employeeService, router, route) {
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
    }
    ShowEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employee = new employee_model_1.Employee();
        this.employee.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
        this.employee.countryMst = new country_model_1.CountryModel();
        this.employee.stateMst = new state_model_1.StateModel();
        this.employee.cityMstByCityMstId = new city_model_1.CityModel();
        this.employee.cityMstByWorkingCity = new city_model_1.CityModel();
        this.employeeService.viewEmployeeDetailsById(this.route.snapshot.params["id"]).subscribe(function (data) {
            _this.employee = data;
            console.log("====================");
            console.log(_this.employee);
            console.log("===================");
        }, function (err) {
            console.log(err.json().message);
        }, function () { console.log('Authentication Complete'); });
    };
    return ShowEmployeeComponent;
}());
ShowEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        templateUrl: 'app/admin/employeeDetails.html'
    }),
    __metadata("design:paramtypes", [admin_employee_service_1.EmployeeService, router_1.Router, router_1.ActivatedRoute])
], ShowEmployeeComponent);
exports.ShowEmployeeComponent = ShowEmployeeComponent;
//# sourceMappingURL=admin.showEmployeeDetails.component.js.map