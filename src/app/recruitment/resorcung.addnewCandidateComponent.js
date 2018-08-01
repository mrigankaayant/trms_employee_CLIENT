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
var AddCandidateComponent = (function () {
    //confirmationDialog:boolean;
    //candidateEditSidebar:boolean;
    function AddCandidateComponent(formBuilder, resourcingService, dropdownService, router) {
        this.formBuilder = formBuilder;
        this.resourcingService = resourcingService;
        this.dropdownService = dropdownService;
        this.router = router;
        this.candidate = new candidate_model_1.Candidate();
    }
    AddCandidateComponent.prototype.ngOnInit = function () {
        this.candidate = new candidate_model_1.Candidate();
        this.candidate.socialMedia = new social_media_model_1.SocialMedia();
        this.candidate.phones = new Array();
        this.candidate.createdBy = new createdby_model_1.CreatedBy();
        this.showDialog = false;
        this.showloader = false;
        this.canSkills = [];
        //this.candidateViewSidebar = false;
        //this.confirmationDialog = false;
        //this.candidateEditSidebar = false;
        //this.resourcingService.getCandidatesList().subscribe(response => this.candidateList = response,error => console.log(error));
        /*this.resourcingService.getCandidatesList().subscribe(
        response => {
            this.datasource = response;
            this.totalRecords = this.datasource.length;
            this.candidateList = this.datasource.slice(0,5);
            //this.candidateList = response;
        },
        err => {
               console.log(err.json().message)
        },
       () => {
            this.showloader = false;
       }
       );

       this.items = [
           {label: 'View', icon: 'fa-search', command: (event) => this.viewCandidate(this.selectedCandidate)},
           {label: 'Edit', icon: 'fa-close', command: (event) => this.editCandidate(this.selectedCandidate)}
           
       ];
       */
        this.canSkills = this.dropdownService.skills;
        this.recStatusList = this.dropdownService.recruitmentStatus;
        this.visaList = this.dropdownService.candidateVisa;
        this.recSourceList = this.dropdownService.recrSource;
        this.payTypeList = this.dropdownService.candidatePayType;
        this.recruitmentServiceList = this.dropdownService.recruitmentServiceList;
        this.addCandidateForm = this.formBuilder.group({
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
            'enrollmentStstus': 'New Entry',
            'serviceName': '',
            'preferredLocations': this.formBuilder.array([
                this.initPreferredLocations()
            ]),
        });
        this.addCandidateForm.controls['skill'].setValue([]);
        /*this.addFollowUpForm = this.formBuilder.group({
            'remrks': '',
            'nxtFollowUpDate': ''
        })*/
        //this.addCandidateForm.controls['enrollmentStstus'].setValue('New Entry');
    };
    /*
    viewCandidate(candidateView: Candidate) {
       this.candidateViewSidebar = true;
       this.candidate = candidateView;
       this.resourcingService.findFollowUpListById(candidateView.candidateId).subscribe(
                  (data) => {
                       this.followupList = data;
                   },
                   err => {
                      console.log(err.json().message)
                   },
                   () => {
                       this.addFollowUpForm.reset();
                   }
                  );
       
    }

    editCandidate(candidateEdit: Candidate){
        this.candidateEditSidebar = true;
    }

    sideBarhideConfirmation(){
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
    }
    */
    AddCandidateComponent.prototype.initPreferredLocations = function () {
        return this.formBuilder.group({
            'location': ''
        });
    };
    AddCandidateComponent.prototype.addPreferredLocations = function () {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.push(this.initPreferredLocations());
    };
    AddCandidateComponent.prototype.removePreferredLocations = function (i) {
        var control = this.addCandidateForm.controls['preferredLocations'];
        control.removeAt(i);
    };
    /*lazyLoadCandidate(event: LazyLoadEvent) {
            if(this.datasource) {
                 this.candidateList = this.datasource.slice(event.first, (event.first + event.rows));
            }
               
    }*/
    /*onRowSelect(event:any) {
        console.log("Candidate Id"+this.selectedCandidate.candidateId);
        var id:string;
         id = this.selectedCandidate.candidateId
        this.router.navigate(['recruitment/editCandidate',id]);
   }*/
    AddCandidateComponent.prototype.saveCandidate = function () {
        var _this = this;
        this.showloader = true;
        var id;
        console.log(this.addCandidateForm.value);
        this.resourcingService.addCandidate(this.addCandidateForm.value).subscribe(function (data) {
            id = data.candidateId;
            //this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Candidate Successfully Saved' });
        }, function (err) {
            console.log(err.json().message);
            //this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Candidate Successfully Not Saved' });
        }, function () {
            _this.showloader = false;
            _this.router.navigate(['recruitment/showFollowUpDetails', id]);
        });
    };
    /*editFollowUp() {
     this.showFollowForm = false;
     this.updateCandidateForm = true;
    }*/
    AddCandidateComponent.prototype.checkEmail = function (email) {
        var _this = this;
        var id = '0';
        if (email.length) {
            this.resourcingService.checkEmail(btoa(email), id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.candidate = data;
                        console.log(_this.candidate.candidateName);
                    }
                }
                else {
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    AddCandidateComponent.prototype.checkMobile = function (mobile) {
        var _this = this;
        var id = '0';
        if (mobile.length) {
            this.resourcingService.checkMobile(mobile, id).subscribe(function (data) {
                if (data != null) {
                    if (data.candidateId != null) {
                        _this.showDialog = true;
                        _this.candidate = data;
                    }
                }
                else {
                }
            }, function (err) {
                console.log(err.json().message);
            }, function () {
            });
        }
    };
    AddCandidateComponent.prototype.closeDialog = function () {
        this.showDialog = false;
        this.addCandidateForm.reset();
        this.addCandidateForm.controls['enrollmentStstus'].setValue('New Entry');
    };
    return AddCandidateComponent;
}());
AddCandidateComponent = __decorate([
    core_1.Component({
        selector: 'resourcing',
        templateUrl: 'app/recruitment/resourcing.addNewCandidate.html',
        styleUrls: ['./app/recruitment/recruitment.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, resourcing_service_1.ResourcingService, dropdown_service_1.DropdownService, router_1.Router])
], AddCandidateComponent);
exports.AddCandidateComponent = AddCandidateComponent;
//# sourceMappingURL=resorcung.addnewCandidateComponent.js.map