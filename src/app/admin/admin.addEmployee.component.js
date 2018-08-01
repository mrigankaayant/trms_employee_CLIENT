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
var employee_model_1 = require("./model/employee.model");
var payrollGroup_model_1 = require("./model/payrollGroup.model");
var admin_employee_service_1 = require("./admin.employee.service");
var admin_payrollgroupService_1 = require("./admin.payrollgroupService");
var admin_country_service_1 = require("./admin.country.service");
var admin_state_service_1 = require("./admin.state.service");
var admin_city_service_1 = require("./admin.city.service");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(employeeService, payrollGroupService, router, formBuilder, countryService, stateService, cityService) {
        this.employeeService = employeeService;
        this.payrollGroupService = payrollGroupService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.countryService = countryService;
        this.stateService = stateService;
        this.cityService = cityService;
        this.msgs = [];
        this.employee = new employee_model_1.Employee();
        this.payrollGroupMst = new payrollGroup_model_1.PayrollGroupModel();
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dualificationList = [];
        this.dualificationList.push({ label: 'Select Qualification', value: 'null' });
        this.dualificationList.push({ label: 'MCA', value: 'MCA' });
        this.dualificationList.push({ label: 'M.Tech', value: 'M.Tech' });
        this.dualificationList.push({ label: 'B.Tech', value: 'B.Tech' });
        this.departmentList = [];
        this.departmentList.push({ label: 'Select Department', value: 'null' });
        this.departmentList.push({ label: 'Software', value: 'Software' });
        this.departmentList.push({ label: 'Recruitment', value: 'Recruitment' });
        this.departmentList.push({ label: 'Sales', value: 'Sales' });
        this.departmentList.push({ label: 'Account', value: 'Account' });
        this.departmentList.push({ label: 'HR', value: 'HR' });
        this.designationList = [];
        this.designationList.push({ label: 'Select Designation', value: 'null' });
        this.designationList.push({ label: 'Developer', value: 'Developer' });
        this.designationList.push({ label: 'Recruiter', value: 'Recruiter' });
        this.designationList.push({ label: 'Sales', value: 'Sales' });
        this.designationList.push({ label: 'Accountant', value: 'Accountant' });
        this.designationList.push({ label: 'HR', value: 'HR' });
        this.accountList = [];
        this.accountList.push({ label: 'Select Account Type', value: 'null' });
        this.accountList.push({ label: 'Saving', value: 'Saving' });
        this.accountList.push({ label: 'Current', value: 'Current' });
        this.payrollGroupList = [];
        this.payrollGroupService.getPayrollGroupList().subscribe(function (Response) {
            _this.payrollGroups = Response;
            _this.payrollGroupList.push({ label: 'Select Payroll Group', value: 'null' });
            for (var i = 0; i < _this.payrollGroups.length; i++) {
                _this.payrollGroupList.push({
                    label: _this.payrollGroups[i].groupName,
                    value: _this.payrollGroups[i].id,
                });
            }
        });
        this.countriesList = [];
        this.countryService.getCountryList().subscribe(function (Response) {
            _this.countries = Response;
            _this.countriesList.push({ label: 'Select Country', value: 'null' });
            for (var i = 0; i < _this.countries.length; i++) {
                _this.countriesList.push({
                    label: _this.countries[i].name,
                    value: _this.countries[i].id
                });
            }
        });
        this.stateList = [];
        this.stateList.push({ label: 'Select State', value: 'null' });
        this.cityList = [];
        this.cityList.push({ label: 'Select City', value: 'null' });
        this.formEmployee = this.formBuilder.group({
            'firstName': '',
            'lastName': '',
            'gender': '',
            'dob': '',
            'fathersName': '',
            'mothersName': '',
            'qualification': '',
            'deperment': '',
            'designation': '',
            'employeeCode': '',
            'monthlySalary': '',
            'houseNo': '',
            'street': '',
            'zipCode': '',
            'phoneNo': '',
            'mobileNo': '',
            'email': '',
            'bankName': '',
            'bankAccountNo': '',
            'bankAccountType': '',
            'bankBranchName': '',
            'bankBranchAddress': '',
            'bankIfsCode': '',
            'bankMicrCode': '',
            'panNumber': '',
            'payrollGroupMst': this.formBuilder.group({
                'id': ''
            }),
            'countryMst': this.formBuilder.group({
                'id': ''
            }),
            'stateMst': this.formBuilder.group({
                'id': ''
            }),
            'cityMstByWorkingCity': this.formBuilder.group({
                'id': ''
            }),
            'cityMstByCityMstId': this.formBuilder.group({
                'id': ''
            })
        });
    };
    AddEmployeeComponent.prototype.onChangeCountryList = function (event) {
        var _this = this;
        this.stateList = [];
        var id = event.value;
        if (id > 0) {
            this.stateService.getStateListByCountryId(event.value).subscribe(function (Response) {
                _this.states = Response;
                _this.stateList.push({ label: 'Select State', value: 'null' });
                for (var i = 0; i < _this.states.length; i++) {
                    _this.stateList.push({
                        label: _this.states[i].stateName,
                        value: _this.states[i].id
                    });
                }
            });
        }
        else {
            this.stateList.push({ label: 'Select State', value: 'null' });
        }
    };
    AddEmployeeComponent.prototype.onChangeStateList = function (event) {
        var _this = this;
        this.cityList = [];
        var id = event.value;
        if (id > 0) {
            this.cityService.getCityListByStateId(event.value).subscribe(function (Response) {
                _this.cities = Response;
                _this.cityList.push({ label: 'Select City', value: 'null' });
                for (var i = 0; i < _this.cities.length; i++) {
                    _this.cityList.push({
                        label: _this.cities[i].cityName,
                        value: _this.cities[i].id
                    });
                }
            });
        }
        else {
            this.cityList.push({ label: 'Select City', value: 'null' });
        }
    };
    AddEmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        this.msgs = [];
        var id;
        this.employeeService.addEmployee(this.formEmployee.value).subscribe(function (data) {
            _this.employee = data;
            id = data.id;
            _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Employee Successfully Saved' });
        }, function (err) {
            console.log(err.json().message);
            _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Employee Successfully Not Saved' });
        }, function () {
            _this.router.navigate(['admin/showEmployeeDetails', id]);
            console.log('Authentication Complete');
        });
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        templateUrl: 'app/admin/addEmployee.html'
    }),
    __metadata("design:paramtypes", [admin_employee_service_1.EmployeeService, admin_payrollgroupService_1.PayrollGroupService, router_1.Router,
        forms_1.FormBuilder, admin_country_service_1.CountryService, admin_state_service_1.StateService,
        admin_city_service_1.CityService])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=admin.addEmployee.component.js.map