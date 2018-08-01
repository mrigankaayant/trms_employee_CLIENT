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
var loader_service_1 = require("./util/loader.service");
var SpinnerComponent = (function () {
    function SpinnerComponent(spinner) {
        var _this = this;
        spinner.status.subscribe(function (status) {
            _this.active = status;
        });
    }
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    core_1.Component({
        selector: 'spinner-component',
        'template': '<div *ngIf="active" class="loader"><img src="../app/asset/image/loading.gif" style="padding-top:20%;" width="90" ></div>'
    }),
    __metadata("design:paramtypes", [loader_service_1.LoaderService])
], SpinnerComponent);
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinnerComponent.js.map