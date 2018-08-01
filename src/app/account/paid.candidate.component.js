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
var payment_details_model_1 = require("../model/payment.details.model");
var candidate_model_1 = require("../model/candidate.model");
var social_media_model_1 = require("../model/social.media.model");
var createdby_model_1 = require("../model/createdby.model");
var payment_model_1 = require("../model/payment.model");
var payer_model_1 = require("../model/payer.model");
var payer_info_model_1 = require("../model/payer.info.model");
var shippingAddress_model_1 = require("../model/shippingAddress.model");
var transaction_model_1 = require("../model/transaction.model");
var itemList_model_1 = require("../model/itemList.model");
var items_model_1 = require("../model/items.model");
var amount_model_1 = require("../model/amount.model");
var details_model_1 = require("../model/details.model");
var PaidCandidateComponent = (function () {
    function PaidCandidateComponent(formBuilder, route, router, accountService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.candidate = new candidate_model_1.Candidate();
    }
    PaidCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidateViewSidebar = false;
        this.candidate = new candidate_model_1.Candidate();
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.phones = new Array();
        this.candidate.createdBy = new createdby_model_1.CreatedBy();
        this.viewDetailsLoader = false;
        this.paymentViewSlideBar = false;
        this.paymentViewLoader = false;
        this.paymentDetail = new payment_details_model_1.PaymentDetails();
        this.paymentDetail.paymentInfo = new payment_model_1.Payment();
        this.paymentDetail.paymentInfo.payer = new payer_model_1.Payer();
        this.paymentDetail.paymentInfo.payer.payerInfo = new payer_info_model_1.PayerInfo();
        this.paymentDetail.paymentInfo.payer.payerInfo.shippingAddress = new shippingAddress_model_1.ShippingAddress();
        this.paymentDetail.paymentInfo.transactions = new transaction_model_1.Transaction();
        this.paymentDetail.paymentInfo.transactions.itemList = new itemList_model_1.ItemList();
        this.paymentDetail.paymentInfo.transactions.itemList.item = new items_model_1.Item();
        this.paymentDetail.paymentInfo.transactions.amount = new amount_model_1.Amount();
        this.paymentDetail.paymentInfo.transactions.amount.details = new details_model_1.Details();
        this.accountService.getAllPaidCandidateList().subscribe(function (response) {
            _this.allPaidCandidateList = response;
            console.log("asas" + _this.allPaidCandidateList.length);
        }, function (err) {
        }, function () {
        });
        this.items = [
            { label: 'View Candidate Info', icon: 'fa-search', command: function (event) { return _this.viewCandidate(_this.selectedCandidate); } },
            { label: 'View Payment Details', icon: 'fa fa-money', command: function (event) { return _this.viewPaymentDetails(_this.selectedCandidate); } }
        ];
    };
    PaidCandidateComponent.prototype.viewCandidate = function (candidateView) {
        var _this = this;
        this.candidateViewSidebar = true;
        //this.candidate = candidateView;
        this.viewDetailsLoader = true;
        console.log(this.candidate);
        this.accountService.findCandidateById(candidateView.candidateId).subscribe(function (data) {
            //console.log(data);
            _this.candidate = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.viewDetailsLoader = false;
        });
    };
    PaidCandidateComponent.prototype.viewPaymentDetails = function (candidatePaymentDetails) {
        var _this = this;
        this.paymentViewSlideBar = true;
        this.paymentViewLoader = true;
        this.accountService.paymentDetails(candidatePaymentDetails.candidateId).subscribe(function (data) {
            console.log(data);
            _this.paymentDetails = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.paymentViewLoader = false;
        });
    };
    return PaidCandidateComponent;
}());
PaidCandidateComponent = __decorate([
    core_1.Component({
        selector: 'account',
        templateUrl: 'app/account/paidCandidateList.html',
        styleUrls: ['./app/account/account.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, account_service_1.AccountService])
], PaidCandidateComponent);
exports.PaidCandidateComponent = PaidCandidateComponent;
//# sourceMappingURL=paid.candidate.component.js.map