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
var admin_incomeTax_service_1 = require("./admin.incomeTax.service");
var IncomeTaxComponent = (function () {
    function IncomeTaxComponent(incomeTaxService) {
        this.incomeTaxService = incomeTaxService;
    }
    IncomeTaxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.incomeTaxService.getIncomeTaxs().subscribe(function (response) { return _this.incomeTaxes = response; }, function (error) { return console.log(error); });
    };
    return IncomeTaxComponent;
}());
IncomeTaxComponent = __decorate([
    core_1.Component({
        selector: 'incomeTax',
        templateUrl: 'app/admin/incomeTaxList.html'
    }),
    __metadata("design:paramtypes", [admin_incomeTax_service_1.IncomeTaxService])
], IncomeTaxComponent);
exports.IncomeTaxComponent = IncomeTaxComponent;
//# sourceMappingURL=admin.incomeTaxListComponent.js.map