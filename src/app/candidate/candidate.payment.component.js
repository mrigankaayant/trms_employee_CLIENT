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
var dropdown_service_1 = require("../util/dropdown.service");
var candidate_service_1 = require("./candidate.service");
var PaymentComponent = (function () {
    function PaymentComponent(formBuilder, route, dropdownService, router, candidateService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.dropdownService = dropdownService;
        this.router = router;
        this.candidateService = candidateService;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.showloader = false;
        this.canSkills = [];
        var id = this.route.snapshot.params["id"];
        this.canSkills = this.dropdownService.skills;
        this.paymentForm = this.formBuilder.group({
            'coureseName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'amount': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'firstName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'lastName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'email': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
            'phone': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]{10}$")])),
            'pricePerItem': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'quantity': new forms_1.FormControl('1', forms_1.Validators.compose([forms_1.Validators.required]))
        });
    };
    PaymentComponent.prototype.paymentThroughPaypal = function () {
        var _this = this;
        if (this.paymentForm.valid == false) {
            console.log("First Block");
            if (this.paymentForm.value.coureseName == null || this.paymentForm.value.coureseName == '') {
                this.paymentForm.controls['coureseName'].markAsDirty();
            }
            if (this.paymentForm.value.amount == null || this.paymentForm.value.amount == '') {
                this.paymentForm.controls['amount'].markAsDirty();
            }
            if (this.paymentForm.value.firstName == null || this.paymentForm.value.firstName == '') {
                this.paymentForm.controls['firstName'].markAsDirty();
            }
            if (this.paymentForm.value.lastName == null || this.paymentForm.value.lastName == '') {
                this.paymentForm.controls['lastName'].markAsDirty();
            }
            if (this.paymentForm.value.email == null || this.paymentForm.value.email == '') {
                this.paymentForm.controls['email'].markAsDirty();
            }
            if (this.paymentForm.value.phone == null || this.paymentForm.value.phone == '') {
                this.paymentForm.controls['phone'].markAsDirty();
            }
            if (this.paymentForm.value.pricePerItem == null || this.paymentForm.value.pricePerItem == '') {
                this.paymentForm.controls['pricePerItem'].markAsDirty();
            }
            if (this.paymentForm.value.quantity == null || this.paymentForm.value.quantity == '') {
                this.paymentForm.controls['quantity'].markAsDirty();
            }
        }
        if (this.paymentForm.valid == true) {
            this.candidateService.makePayment(this.paymentForm.value).subscribe(function (data) {
                window.location.href = data.redirect_url;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.showloader = true;
                console.log("success");
            });
        }
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'payment',
        templateUrl: 'app/candidate/paymentForm.html',
        styleUrls: ['./app/candidate/candidate.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute,
        dropdown_service_1.DropdownService, router_1.Router, candidate_service_1.CandidateService])
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=candidate.payment.component.js.map