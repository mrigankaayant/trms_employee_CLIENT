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
var admin_taxPayerGroup_service_1 = require("./admin.taxPayerGroup.service");
var TaxPayerGroupComponent = (function () {
    function TaxPayerGroupComponent(taxPayerGroupService) {
        this.taxPayerGroupService = taxPayerGroupService;
    }
    TaxPayerGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taxPayerGroupService.getTaxPayerGroups().subscribe(function (response) { return _this.taxPayerGroups = response; }, function (error) { return console.log(error); });
    };
    return TaxPayerGroupComponent;
}());
TaxPayerGroupComponent = __decorate([
    core_1.Component({
        selector: 'taxPayerGroupList',
        templateUrl: 'app/admin/taxPayerGroupList.html'
    }),
    __metadata("design:paramtypes", [admin_taxPayerGroup_service_1.TaxPayerGroupService])
], TaxPayerGroupComponent);
exports.TaxPayerGroupComponent = TaxPayerGroupComponent;
//# sourceMappingURL=admin.taxpayergroup.component.js.map