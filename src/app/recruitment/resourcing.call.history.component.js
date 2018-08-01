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
var resourcing_service_1 = require("./resourcing.service");
var dropdown_service_1 = require("../util/dropdown.service");
var CallHistoryComponent = (function () {
    function CallHistoryComponent(formBuilder, resourcingService, dropdownService, router) {
        this.formBuilder = formBuilder;
        this.resourcingService = resourcingService;
        this.dropdownService = dropdownService;
        this.router = router;
    }
    CallHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showloader = true;
        this.resourcingService.findCallHistory().subscribe(function (response) {
            _this.callHistoryList = response;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.showloader = false;
        });
    };
    return CallHistoryComponent;
}());
CallHistoryComponent = __decorate([
    core_1.Component({
        selector: 'resourcing',
        templateUrl: 'app/recruitment/callHistoryList.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, resourcing_service_1.ResourcingService, dropdown_service_1.DropdownService, router_1.Router])
], CallHistoryComponent);
exports.CallHistoryComponent = CallHistoryComponent;
//# sourceMappingURL=resourcing.call.history.component.js.map