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
var admin_employee_service_1 = require("./admin.employee.service");
var admin_payrollgroupService_1 = require("./admin.payrollgroupService");
var admin_country_service_1 = require("./admin.country.service");
var admin_state_service_1 = require("./admin.state.service");
var admin_city_service_1 = require("./admin.city.service");
var EditEmployeeComponent = (function () {
    function EditEmployeeComponent(employeeService, payrollGroupService, countryService, stateService, cityService, router, route, fb) {
        this.employeeService = employeeService;
        this.payrollGroupService = payrollGroupService;
        this.countryService = countryService;
        this.stateService = stateService;
        this.cityService = cityService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.employee = new employee_model_1.Employee();
        this.msgs = [];
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
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
                    value: _this.payrollGroups[i].id
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
        this.stateService.getStateList().subscribe(function (Response) {
            _this.states = Response;
            _this.stateList.push({ label: 'Select State', value: 'null' });
            for (var i = 0; i < _this.states.length; i++) {
                _this.stateList.push({
                    label: _this.states[i].stateName,
                    value: _this.states[i].id
                });
            }
        });
        this.cityList = [];
        this.cityService.getCityList().subscribe(function (Response) {
            _this.cities = Response;
            _this.cityList.push({ label: 'Select City', value: 'null' });
            for (var i = 0; i < _this.cities.length; i++) {
                _this.cityList.push({
                    label: _this.cities[i].cityName,
                    value: _this.cities[i].id
                });
            }
        });
        this.formEmployee = this.fb.group({
            'id': '',
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
            'payrollGroupMst': this.fb.group({
                'id': ''
            }),
            'countryMst': this.fb.group({
                'id': ''
            }),
            'stateMst': this.fb.group({
                'id': ''
            }),
            'cityMstByWorkingCity': this.fb.group({
                'id': ''
            }),
            'cityMstByCityMstId': this.fb.group({
                'id': ''
            })
        });
        var id = this.route.snapshot.params["id"];
        this.employeeService.viewEmployeeDetailsById(id).subscribe(function (data) {
            _this.employee = new employee_model_1.Employee();
            _this.employee = data;
            if (data.dob != null) {
                _this.employee.dob = new Date(data.dob);
            }
            _this.formEmployee.patchValue(_this.employee);
        }, function (err) {
            console.log(err.json().message);
        }, function () { console.log('Authentication Complete'); });
    };
    EditEmployeeComponent.prototype.updateEmployee = function () {
        var _this = this;
        this.msgs = [];
        this.employeeService.addEmployee(this.formEmployee.value).subscribe(function (data) {
            _this.employee = data;
            _this.router.navigate(['admin/showEmployeeDetails', _this.employee.id]);
        }, function (err) {
            console.log(err.json().message);
            _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Employee Successfully Not Updated' });
        }, function () { console.log('Authentication Complete'); });
    };
    EditEmployeeComponent.prototype.onChangeCountryList = function (event) {
        var _this = this;
        this.stateList = [];
        var id = event.value;
        if (id > 0) {
            this.stateList = [];
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
            this.cityList = [];
            this.cityList.push({ label: 'Select City', value: 'null' });
        }
    };
    EditEmployeeComponent.prototype.onChangeStateList = function (event) {
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
    return EditEmployeeComponent;
}());
EditEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'editEmployee',
        templateUrl: 'app/admin/editEmployee.html'
    }),
    __metadata("design:paramtypes", [admin_employee_service_1.EmployeeService, admin_payrollgroupService_1.PayrollGroupService,
        admin_country_service_1.CountryService, admin_state_service_1.StateService,
        admin_city_service_1.CityService, router_1.Router, router_1.ActivatedRoute,
        forms_1.FormBuilder])
], EditEmployeeComponent);
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=admin.editEmployeeComponent.js.map