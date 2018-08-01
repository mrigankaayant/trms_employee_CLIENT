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
var candidate_model_1 = require("../model/candidate.model");
var social_media_model_1 = require("../model/social.media.model");
var createdby_model_1 = require("../model/createdby.model");
var add_candidate_model_1 = require("../model/add.candidate.model");
var payment_details_model_1 = require("../model/payment.details.model");
var payment_model_1 = require("../model/payment.model");
var payer_model_1 = require("../model/payer.model");
var payer_info_model_1 = require("../model/payer.info.model");
var shippingAddress_model_1 = require("../model/shippingAddress.model");
var transaction_model_1 = require("../model/transaction.model");
var itemList_model_1 = require("../model/itemList.model");
var items_model_1 = require("../model/items.model");
var amount_model_1 = require("../model/amount.model");
var details_model_1 = require("../model/details.model");
var ResourcingComponent = (function () {
    function ResourcingComponent(formBuilder, resourcingService, dropdownService, router) {
        this.formBuilder = formBuilder;
        this.resourcingService = resourcingService;
        this.dropdownService = dropdownService;
        this.router = router;
        this.candidate = new candidate_model_1.Candidate();
        this.addCandidate = new add_candidate_model_1.AddCandidate();
        this.personalMsgs = [];
        this.followupMsgs = [];
        this.enrollmentMsg = [];
    }
    ResourcingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidate = new candidate_model_1.Candidate();
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.phones = new Array();
        this.candidate.createdBy = new createdby_model_1.CreatedBy();
        this.showDialog = false;
        this.showloader = true;
        this.candidateViewSidebar = false;
        this.confirmationDialog = false;
        this.candidateEditSidebar = false;
        this.showEnrollment = false;
        this.showButoon = false;
        this.candidateFollowUpEditSidebar = false;
        this.candidateCallHistroySlidBar = false;
        this.phoneCallList = null;
        this.editloader = false;
        this.callHistoryLoader = false;
        this.editFollowUpLoader = false;
        this.viewDetailsLoader = false;
        this.enrollmentSendDialog = false;
        this.enrollmentMsg = [];
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
        //this.resourcingService.getCandidatesList().subscribe(response => this.candidateList = response,error => console.log(error));
        this.resourcingService.getCandidatesList().subscribe(function (response) {
            //this.datasource = response;
            //this.totalRecords = this.datasource.length;
            //this.candidateList = this.datasource.slice(0,20);
            _this.candidateList = response;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.showloader = false;
        });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCandidate(_this.selectedCandidate); } },
            { label: 'Edit', icon: 'fa-edit', command: function (event) { return _this.editCandidate(_this.selectedCandidate); } },
            { label: 'FollowUp Edit', icon: 'fa fa-edit', command: function (event) { return _this.followUpEditCandidate(_this.selectedCandidate); } },
            { label: 'Check Call History', icon: 'fa fa-phone', command: function (event) { return _this.callHistory(_this.selectedCandidate); } },
            { label: 'Send Credential', icon: 'fa  fa-paper-plane', command: function (event) { return _this.sendEnrollmentSlide(_this.selectedCandidate); } },
            { label: 'View Payment Details', icon: 'fa fa-money', command: function (event) { return _this.viewPaymentDetails(_this.selectedCandidate); } }
        ];
        this.canSkills = this.dropdownService.skills;
        this.recStatusList = this.dropdownService.recruitmentStatus;
        this.visaList = this.dropdownService.candidateVisa;
        this.recSourceList = this.dropdownService.recrSource;
        this.payTypeList = this.dropdownService.candidatePayType;
        this.recruitmentServiceList = this.dropdownService.recruitmentServiceList;
        this.addCandidateForm = this.formBuilder.group({
            'candidateId': '',
            'candidateName': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'payType': '',
            'email': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))])),
            'payRate': '',
            'alternateEmail': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
            'graduationDate': '',
            'workMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]{10}$")])),
            'currentLocation': '',
            'homeMobile': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.pattern("^[0-9]{10}$")])),
            'visa': '',
            'visaStartDate': '',
            'recruitmentSource': '',
            'skill': '',
            'courseFee': '',
            'enrollmentStstus': '',
            'serviceName': '',
            'preferredLocations': this.formBuilder.array([
                this.initPreferredLocations()
            ])
        });
        this.addFollowUpForm = this.formBuilder.group({
            'candidateId': '',
            'nextFollowUpDate': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            'followupRemarks': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required]))
        });
    };
    ResourcingComponent.prototype.initPreferredLocations = function () {
        return this.formBuilder.group({
            'location': ''
        });
    };
    ResourcingComponent.prototype.addPreferredLocations = function () {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.push(this.initPreferredLocations());
    };
    ResourcingComponent.prototype.removePreferredLocations = function (i) {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.removeAt(i);
    };
    ResourcingComponent.prototype.prefferedLocation = function (s) {
        return this.formBuilder.group({
            location: new forms_1.FormControl(s)
        });
    };
    ResourcingComponent.prototype.viewCandidate = function (candidateView) {
        var _this = this;
        this.candidateViewSidebar = true;
        this.candidate = candidateView;
        this.viewDetailsLoader = true;
        console.log(this.candidate);
        this.resourcingService.findFollowUpListById(candidateView.candidateId).subscribe(function (data) {
            _this.followupList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.viewDetailsLoader = false;
        });
    };
    ResourcingComponent.prototype.editCandidate = function (candidateEdit) {
        var _this = this;
        this.personalMsgs = [];
        this.editloader = true;
        var control1 = this.addCandidateForm.controls['preferredLocations'];
        if (this.addCandidateForm.value.preferredLocations.length > 1) {
            for (var i = 0; i < this.addCandidateForm.value.preferredLocations.length; i++) {
                control1.removeAt(i - 1);
            }
        }
        control1.reset();
        this.candidateEditSidebar = true;
        this.id = candidateEdit.candidateId;
        this.resourcingService.findCandidateByIdForUpdate(candidateEdit.candidateId).subscribe(function (data) {
            _this.addCandidate = new add_candidate_model_1.AddCandidate();
            _this.addCandidate = data;
            if (data.graduationDate != null) {
                _this.addCandidate.graduationDate = new Date(data.graduationDate);
            }
            if (data.enrollmentStstus == "Enrolled") {
                _this.showEnrollment = true;
            }
            else {
                _this.showEnrollment = false;
            }
            if (data.visaStartDate != null) {
                _this.addCandidate.visaStartDate = new Date(data.visaStartDate);
            }
            if (data.preferredLocations != null) {
                var control1_1 = _this.addCandidateForm.controls['preferredLocations'];
                control1_1.removeAt(0);
                for (var _i = 0, _a = data.preferredLocations; _i < _a.length; _i++) {
                    var c = _a[_i];
                    control1_1.push(_this.prefferedLocation(c));
                }
            }
            _this.addCandidateForm.patchValue(_this.addCandidate);
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.editloader = false;
        });
    };
    ResourcingComponent.prototype.followUpEditCandidate = function (followUpCandidateEdit) {
        var _this = this;
        this.candidate = followUpCandidateEdit;
        this.editFollowUpLoader = true;
        this.candidateFollowUpEditSidebar = true;
        this.id = followUpCandidateEdit.candidateId;
        this.addFollowUpForm.controls['candidateId'].setValue(this.id);
        this.resourcingService.findFollowUpListById(followUpCandidateEdit.candidateId).subscribe(function (data) {
            _this.followupList = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.editFollowUpLoader = false;
        });
    };
    ResourcingComponent.prototype.sendEnrollmentSlide = function (candidateEnrollment) {
        this.candidateSendEnrollmentSlidBar = true;
        this.candidate = candidateEnrollment;
    };
    ResourcingComponent.prototype.enrollmentSendConfirmation = function () {
        this.enrollmentSendDialog = true;
    };
    ResourcingComponent.prototype.sendEnrollment = function () {
        var _this = this;
        this.enrollmentMsg = [];
        this.enrollmentSendDialog = false;
        this.resourcingService.enrollmentSend(this.candidate.candidateId).subscribe(function (data) {
            if (data == null) {
                _this.enrollmentMsg.push({ severity: 'error', summary: 'Error ', detail: 'Sorry! Please Update Candidate Email' });
            }
            else {
                _this.enrollmentMsg.push({ severity: 'success', summary: 'Success', detail: 'Enrollment Form Successfully Sent' });
            }
        }, function (err) {
            console.log(err);
            _this.enrollmentMsg.push({ severity: 'error', summary: 'Error ', detail: 'Enrollment Form Successfully Not Sent' });
        }, function () {
        });
    };
    ResourcingComponent.prototype.viewPaymentDetails = function (candidatePaymentDetails) {
        var _this = this;
        this.paymentViewSlideBar = true;
        this.paymentViewLoader = true;
        this.resourcingService.paymentDetails(candidatePaymentDetails.candidateId).subscribe(function (data) {
            console.log(data);
            _this.paymentDetails = data;
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.paymentViewLoader = false;
        });
    };
    /*saveFollowUp() {

         var id:string;
         this.editFollowUpLoader = true;
         this.resourcingService.addFollowup(this.addFollowUpForm.value).subscribe(
            data => {
                id = data.candidateInfo.candidateId;
                this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
            },
            err => {
                 this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
            },
            () => {
                  this.resourcingService.findFollowUpListById(id).subscribe(
                  (data) => {
                       this.followupList = data;
                   },
                   err => {
                      console.log(err.json().message)
                   },
                   () => {
                       this.addFollowUpForm.reset();
                       this.addFollowUpForm.controls['candidateId'].setValue(id);
                       this.editFollowUpLoader = false;
                   }
                  );
            }
        );
    }
    */
    ResourcingComponent.prototype.saveFollowUp = function () {
        var _this = this;
        var id;
        this.editFollowUpLoader = true;
        this.resourcingService.addFollowup(this.addFollowUpForm.value).subscribe(function (data) {
            id = data.candidateInfo.candidateId;
            _this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
        }, function (err) {
            _this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
        }, function () {
            _this.resourcingService.findFollowUpListById(id).subscribe(function (data) {
                _this.followupList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.addFollowUpForm.reset();
                _this.addFollowUpForm.controls['candidateId'].setValue(id);
                _this.editFollowUpLoader = false;
                _this.resourcingService.getCandidatesList().subscribe(function (response) {
                    _this.candidateList = response;
                }, function (err) {
                    console.log(err.json().message);
                }, function () {
                    _this.editFollowUpLoader = false;
                });
            });
        });
    };
    ResourcingComponent.prototype.updateCandidate = function () {
        var _this = this;
        console.log("Enter UpDate");
        this.editloader = true;
        this.addCandidate = this.addCandidateForm.value;
        console.log(this.addCandidate.skill);
        var id;
        this.resourcingService.updateCandidate(this.addCandidate).subscribe(function (data) {
            id = data.candidateId;
            if (data.enrollmentStstus == "Enrolled") {
                _this.showEnrollment = true;
                console.log("asasasasas   " + _this.showEnrollment);
            }
            else {
                _this.showEnrollment = false;
            }
            _this.personalMsgs.push({ severity: 'success', summary: 'Success', detail: 'Candidate Successfully Updated' });
        }, function (err) {
            console.log(err.json().message);
            _this.personalMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Candidate Successfully Not Updated' });
        }, function () {
            _this.resourcingService.getCandidatesList().subscribe(function (data) {
                _this.candidateList = data;
            }, function (err) {
                console.log(err.json().message);
            }, function () {
                _this.editloader = false;
            });
        });
    };
    ResourcingComponent.prototype.callHistory = function (callingCandidate) {
        var _this = this;
        this.candidateCallHistroySlidBar = true;
        this.callHistoryLoader = true;
        this.resourcingService.findPhoneCallsById(callingCandidate.candidateId).subscribe(function (data) {
            _this.phoneCallList = data;
            console.log(_this.phoneCallList);
        }, function (err) {
            console.log(err.json().message);
        }, function () {
            _this.callHistoryLoader = false;
        });
    };
    /*	sideBarhideConfirmation(){
            this.confirmationDialog = true;
            this.candidateViewSidebar = true;
        }
    
        showSideBar(){
            this.confirmationDialog = false;
            this.candidateViewSidebar = true;
        }
    
        closeSideBar(){
            this.confirmationDialog = false;
            this.candidateViewSidebar = false;
        } */
    ResourcingComponent.prototype.lazyLoadCandidate = function (event) {
        if (this.datasource) {
            this.candidateList = this.datasource.slice(event.first, (event.first + event.rows));
        }
    };
    /*
     onRowSelect(event:any) {
         console.log("Candidate Id"+this.selectedCandidate.candidateId);
         var id:string;
          id = this.selectedCandidate.candidateId
         this.router.navigate(['recruitment/editCandidate',id]);
    }
    */
    /*
    saveCandidate() {

        console.log(this.addCandidateForm.value);
         var id:string;
         this.resourcingService.addCandidate(this.addCandidateForm.value).subscribe(
            data => {
                id = data.candidateId;
                //this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Candidate Successfully Saved' });
            },
            err => {
                console.log(err.json().message)
                //this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Candidate Successfully Not Saved' });
            },
            () => {
                  this.router.navigate(['recruitment/showFollowUpDetails',id]);
            }
        );
    }
    */
    /*
    editFollowUp() {
     this.showFollowForm = false;
     this.updateCandidateForm = true;
    }

    */
    ResourcingComponent.prototype.checkEmail = function (email) {
        var _this = this;
        if (email.length) {
            this.resourcingService.checkEmail(btoa(email), this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = true;
                        _this.candidate = data;
                        _this.addCandidateForm.controls['email'].setErrors({ 'incorrect': true });
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    console.log("validate enter");
                    _this.addCandidateForm.controls['email'].setValidators([forms_1.Validators.required, forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))]),
                        _this.showDialog = false;
                    _this.showButoon = false;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingComponent.prototype.checkAlternateEmail = function (email) {
        var _this = this;
        if (email.length) {
            this.resourcingService.checkEmail(btoa(email), this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = true;
                        _this.candidate = data;
                        _this.addCandidateForm.controls['alternateEmail'].setErrors({ 'incorrect': true });
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    console.log("validate enter");
                    _this.addCandidateForm.controls['alternateEmail'].setValidators([forms_1.Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))]),
                        _this.showDialog = false;
                    _this.showButoon = false;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingComponent.prototype.checkMobile = function (mobile) {
        var _this = this;
        if (mobile.length) {
            this.resourcingService.checkMobile(mobile, this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = false;
                        _this.addCandidateForm.controls['workMobile'].setErrors({ 'incorrect': true });
                        _this.candidate = data;
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    _this.addCandidateForm.controls['workMobile'].setValidators([forms_1.Validators.required, forms_1.Validators.pattern(("^[0-9]{10}$"))]),
                        _this.showDialog = false;
                    _this.showButoon = false;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingComponent.prototype.checkHomeMobile = function (mobile) {
        var _this = this;
        if (mobile.length) {
            this.resourcingService.checkMobile(mobile, this.id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.showButoon = false;
                        _this.addCandidateForm.controls['homeMobile'].setErrors({ 'incorrect': true });
                        _this.candidate = data;
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                    _this.addCandidateForm.controls['homeMobile'].setValidators([forms_1.Validators.pattern(("^[0-9]{10}$"))]),
                        _this.showDialog = false;
                    _this.showButoon = true;
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    ResourcingComponent.prototype.closeDialog = function () {
        this.showDialog = false;
        this.addCandidateForm.reset();
        this.addCandidateForm.controls['enrollmentStstus'].setValue('New Entry');
    };
    return ResourcingComponent;
}());
ResourcingComponent = __decorate([
    core_1.Component({
        selector: 'resourcing',
        templateUrl: 'app/recruitment/resourcing.listCandidate.html',
        styleUrls: ['./app/recruitment/recruitment.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, resourcing_service_1.ResourcingService, dropdown_service_1.DropdownService, router_1.Router])
], ResourcingComponent);
exports.ResourcingComponent = ResourcingComponent;
//# sourceMappingURL=resourcing.list.component.js.map