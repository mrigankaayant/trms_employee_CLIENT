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
var resourcing_service_1 = require("./resourcing.service");
var dropdown_service_1 = require("../util/dropdown.service");
var forms_1 = require("@angular/forms");
var EmployeeIncentive = (function () {
    function EmployeeIncentive(formBuilder, resourcingService, dropdownService, router) {
        this.formBuilder = formBuilder;
        this.resourcingService = resourcingService;
        this.dropdownService = dropdownService;
        this.router = router;
        this.months = [
            { label: 'Select Month', value: '' },
            { label: 'January', value: 'JANUARY' },
            { label: 'February', value: 'FEBRUARY' },
            { label: 'March', value: 'MARCH' },
            { label: 'April', value: 'APRIL' },
            { label: 'May', value: 'MAY' },
            { label: 'June', value: 'JUNE' },
            { label: 'July', value: 'JULY' },
            { label: 'August', value: 'AUGUST' },
            { label: 'September', value: 'SEPTEMBER' },
            { label: 'October', value: 'OCTOBER' },
            { label: 'November', value: 'NOVEMBER' },
            { label: 'December', value: 'DECEMBER' },
        ];
        this.years = [
            { label: 'Select Year', value: '' },
            { label: '2017', value: '2017' },
            { label: '2018', value: '2018' },
            { label: '2019', value: '2019' },
            { label: '2020', value: '2020' },
            { label: '2021', value: '2021' },
            { label: '2022', value: '2022' },
            { label: '2023', value: '2023' },
            { label: '2024', value: '2024' },
            { label: '2025', value: '2025' },
            { label: '2026', value: '2026' },
            { label: '2027', value: '2027' },
            { label: '2028', value: '2028' },
        ];
    }
    EmployeeIncentive.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader = true;
        this.resourcingService.ownPayment().subscribe(function (data) {
            console.log(data);
            _this.individulaPaymentDto = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.resourcingService.teamPayment().subscribe(function (data) {
                console.log(data);
                _this.teamLeaderPaymentDto = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.showLoader = false;
            });
        });
        this.checkIncentive = this.formBuilder.group({
            'selectedMonth': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'selectedYear': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required]))
        });
    };
    EmployeeIncentive.prototype.sendIncentiveMonthYear = function () {
        var _this = this;
        this.resourcingService.ownPaymentByMonthYear(this.checkIncentive.value.selectedMonth, this.checkIncentive.value.selectedYear).subscribe(function (data) {
            console.log(data);
            _this.individulaPaymentDto = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.resourcingService.teamPaymentByMonthYear(_this.checkIncentive.value.selectedMonth, _this.checkIncentive.value.selectedYear).subscribe(function (data) {
                console.log(data);
                _this.teamLeaderPaymentDto = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.showLoader = false;
            });
        });
    };
    return EmployeeIncentive;
}());
EmployeeIncentive = __decorate([
    core_1.Component({
        selector: 'incentive',
        templateUrl: 'app/recruitment/resourcing.employeeincentive.html',
        styleUrls: ['./app/recruitment/recruitment.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, resourcing_service_1.ResourcingService, dropdown_service_1.DropdownService, router_1.Router])
], EmployeeIncentive);
exports.EmployeeIncentive = EmployeeIncentive;
//# sourceMappingURL=employee.incentive.calculation.component.js.map