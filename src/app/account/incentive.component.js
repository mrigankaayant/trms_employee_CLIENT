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
var account_service_1 = require("./account.service");
var dropdown_service_1 = require("../util/dropdown.service");
var IncenTiveComponent = (function () {
    function IncenTiveComponent(formBuilder, route, router, accountService, dropdownService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.dropdownService = dropdownService;
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
    IncenTiveComponent.prototype.ngOnInit = function () {
        this.showLoader = false;
        this.employeeName = this.dropdownService.emoloyeeNames;
        this.checkIncentive = this.formBuilder.group({
            'employeeID': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'selectedMonth': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'selectedYear': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required]))
        });
    };
    IncenTiveComponent.prototype.sendIncentiveMonthYear = function () {
        var _this = this;
        this.showLoader = true;
        this.accountService.ownPaymentByMonthYearEmpID(this.checkIncentive.value.selectedMonth, this.checkIncentive.value.selectedYear, this.checkIncentive.value.employeeID).subscribe(function (data) {
            console.log(data);
            _this.individulaPaymentDto = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.accountService.teamPaymentByMonthYearrEmpID(_this.checkIncentive.value.selectedMonth, _this.checkIncentive.value.selectedYear, _this.checkIncentive.value.employeeID).subscribe(function (data) {
                console.log(data);
                _this.teamLeaderPaymentDto = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.showLoader = false;
            });
        });
    };
    return IncenTiveComponent;
}());
IncenTiveComponent = __decorate([
    core_1.Component({
        selector: 'account',
        templateUrl: 'app/account/incentive.html',
        styleUrls: ['./app/account/account.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute,
        router_1.Router, account_service_1.AccountService, dropdown_service_1.DropdownService])
], IncenTiveComponent);
exports.IncenTiveComponent = IncenTiveComponent;
//# sourceMappingURL=incentive.component.js.map