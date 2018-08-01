import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ResourcingService } from './resourcing.service';
import { CandidateFollowUpComponent } from './resourcing.addfollowup.component';
import { DropdownService } from '../util/dropdown.service';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,ContextMenuModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule,DialogModule} from 'primeng/primeng';
import { Candidate } from '../model/candidate.model';
import {  CandidateShow} from '../model/candidate.show.model';
import { CandidateCourse } from '../model/candidate.course.model';
import { CandidateRemarks } from '../model/candidate.remarks.model';
import { SocialMedia } from '../model/social.media.model';
import { PreferredLocation } from '../model/preferred.location.model';
import { Immigration } from '../model/candidate.imigration.model';
import { Phone } from '../model/phone.model';
import { FollowUp } from '../model/folloup.model';
import { CreatedBy } from '../model/createdby.model'; 
import { AddCandidate } from '../model/add.candidate.model';
import { PhoneLogs } from '../model/phonelogs.model';

import {PaymentDetails} from '../model/payment.details.model';
import{Payment} from '../model/payment.model';
import{Payer} from '../model/payer.model';
import {PayerInfo} from '../model/payer.info.model';
import {ShippingAddress} from '../model/shippingAddress.model';
import {Transaction} from '../model/transaction.model';
import {ItemList} from '../model/itemList.model';
import {Item} from '../model/items.model';
import {Amount} from '../model/amount.model';
import {Details} from '../model/details.model';


@Component({

	selector: 'resourcing',
	templateUrl: 'app/recruitment/resourcing.listCandidate.html',
	styleUrls: ['./app/recruitment/recruitment.css']
})

export class ResourcingComponent {
	showloader:boolean;

	candidateList: Candidate[];
	selectedCandidate:Candidate;
	totalRecord: number;
	datasource: Candidate[];
	//selectedCandidate: CandidateModel;
	menuBar: MenuItem[];
	canSkills: SelectItem[];
	recStatusList: SelectItem[];
	visaList:SelectItem[];
	recSourceList:SelectItem[];
	payTypeList:SelectItem[];
	addCandidateForm: FormGroup;
	addFollowUpForm: FormGroup;
	hideCandidateForm: boolean;
	showFollowForm: boolean;
	updateCandidateForm : boolean;
    isLoaded : boolean;
	showDialog:boolean;
	recruitmentServiceList:SelectItem[];
	candidate:Candidate = new Candidate();
	totalRecords: number;
	items: MenuItem[];
	candidateViewSidebar:boolean;
	followupList:FollowUp[];
	confirmationDialog:boolean;
	candidateEditSidebar:boolean;
	addCandidate:AddCandidate = new AddCandidate();
	showEnrollment:boolean;
	showButoon:boolean;
	id:string;
	personalMsgs: Message[] = [];
	candidateFollowUpEditSidebar:boolean;
	followupMsgs: Message[] = [];
	candidateCallHistroySlidBar:boolean;
	phoneCallList:PhoneLogs[];
	editloader:boolean;
	callHistoryLoader:boolean;
	editFollowUpLoader:boolean;
	viewDetailsLoader:boolean;
	candidateSendEnrollmentSlidBar:boolean;
	enrollmentSendDialog:boolean;
	enrollmentMsg: Message[] = [];
	paymentDetails:PaymentDetails[];
    paymentDetail:PaymentDetails;
	paymentViewSlideBar:boolean;
	paymentViewLoader:boolean;

	constructor(private formBuilder: FormBuilder,private resourcingService:ResourcingService, private dropdownService: DropdownService,private router: Router) {	}

	ngOnInit() {
        this.candidate = new Candidate();
		this.candidate.socialMedia = new SocialMedia();
		this.candidate.phones = new Array<Phone>();
		this.candidate.createdBy = new CreatedBy();
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


		this.paymentDetail = new PaymentDetails();
        this.paymentDetail.paymentInfo = new Payment();
        this.paymentDetail.paymentInfo.payer = new Payer();
        this.paymentDetail.paymentInfo.payer.payerInfo = new PayerInfo();
        this.paymentDetail.paymentInfo.payer.payerInfo.shippingAddress = new ShippingAddress();
        this.paymentDetail.paymentInfo.transactions = new Transaction();
        this.paymentDetail.paymentInfo.transactions.itemList = new ItemList();
        this.paymentDetail.paymentInfo.transactions.itemList.item = new Item();
        this.paymentDetail.paymentInfo.transactions.amount = new Amount();
        this.paymentDetail.paymentInfo.transactions.amount.details = new Details();

		//this.resourcingService.getCandidatesList().subscribe(response => this.candidateList = response,error => console.log(error));
		
		 this.resourcingService.getCandidatesList().subscribe(
         response => {
			 //this.datasource = response;
			 //this.totalRecords = this.datasource.length;
			 //this.candidateList = this.datasource.slice(0,20);
			 this.candidateList = response;
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
			{label: 'Edit', icon: 'fa-edit', command: (event) => this.editCandidate(this.selectedCandidate)},
			{label: 'FollowUp Edit', icon: 'fa fa-edit', command: (event) => this.followUpEditCandidate(this.selectedCandidate)},
			{label: 'Check Call History', icon: 'fa fa-phone', command: (event) => this.callHistory(this.selectedCandidate)},
			{label: 'Send Credential', icon: 'fa  fa-paper-plane', command: (event) => this.sendEnrollmentSlide(this.selectedCandidate)},
			{label: 'View Payment Details', icon: 'fa fa-money', command: (event) => this.viewPaymentDetails(this.selectedCandidate)}
            
        ];

		

		this.canSkills = this.dropdownService.skills;
        this.recStatusList = this.dropdownService.recruitmentStatus;
	    this.visaList = this.dropdownService.candidateVisa;
		this.recSourceList = this.dropdownService.recrSource;
		this.payTypeList = this.dropdownService.candidatePayType;
		this.recruitmentServiceList = this.dropdownService.recruitmentServiceList;

		this.addCandidateForm = this.formBuilder.group({
			'candidateId':'',
			'candidateName': new FormControl('', Validators.compose([Validators.required])),
			'payType': '',
			'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))])),
			'payRate': '',
			'alternateEmail': new FormControl('', Validators.compose([Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
			'graduationDate': '',
			'workMobile': new FormControl('',  Validators.compose([Validators.required,Validators.pattern("^[0-9]{10}$")])),
			'currentLocation': '', 
			'homeMobile': new FormControl('', Validators.compose([Validators.pattern("^[0-9]{10}$")])),
			'visa': '', 
			'visaStartDate': '',
			'recruitmentSource': '',
            'skill': '',
            'courseFee': '',
			'enrollmentStstus':'',
			'serviceName':'',
			'preferredLocations': this.formBuilder.array([
                this.initPreferredLocations()
            ])
		});
    
		this.addFollowUpForm = this.formBuilder.group({
			'candidateId':'',
			'nextFollowUpDate':new FormControl('', Validators.compose([Validators.required])),
			'followupRemarks':new FormControl('', Validators.compose([Validators.required]))
		});
	}

	initPreferredLocations() {
        return this.formBuilder.group({
            'location':''
        });
    }

	addPreferredLocations() {
    const control = <FormArray>this.addCandidateForm.controls['preferredLocations'];
    control.push(this.initPreferredLocations());
}

removePreferredLocations(i: number) {
    const control = <FormArray>this.addCandidateForm.controls['preferredLocations'];
    control.removeAt(i);
} 


prefferedLocation(s:string){
        return this.formBuilder.group({
            location:new FormControl(s)
        });
}


	viewCandidate(candidateView: Candidate) {
	   this.candidateViewSidebar = true;
       this.candidate = candidateView;
	   this.viewDetailsLoader = true;
	   console.log(this.candidate);
	   this.resourcingService.findFollowUpListById(candidateView.candidateId).subscribe(
                  (data) => {
                       this.followupList = data;
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
					   this.viewDetailsLoader = false;
                   }
			      );	
	   
    }

	editCandidate(candidateEdit: Candidate){
	    this.personalMsgs = [];
		this.editloader = true;
		const control1 = <FormArray>this.addCandidateForm.controls['preferredLocations'];
        if(this.addCandidateForm.value.preferredLocations.length >1){
             for(let i=0;i<this.addCandidateForm.value.preferredLocations.length;i++){
                control1.removeAt(i-1); 
			 }
		}
		control1.reset();

		this.candidateEditSidebar = true;
		this.id = candidateEdit.candidateId;
		 this.resourcingService.findCandidateByIdForUpdate(candidateEdit.candidateId).subscribe(
            (data) => {
                this.addCandidate = new AddCandidate();
                this.addCandidate = data;
                if (data.graduationDate != null) {
                this.addCandidate.graduationDate = new Date(data.graduationDate);
			}
			if(data.enrollmentStstus == "Enrolled"){
				this.showEnrollment = true;
			}else{
				this.showEnrollment = false;
			}
			if (data.visaStartDate != null) {
                this.addCandidate.visaStartDate = new Date(data.visaStartDate);
            }

			if(data.preferredLocations != null){
                 const control1 = <FormArray>this.addCandidateForm.controls['preferredLocations'];
				 control1.removeAt(0);
		         for(let c of data.preferredLocations){
			      control1.push(this.prefferedLocation(c));
		         }
		 	}
			    
                this.addCandidateForm.patchValue(this.addCandidate);
            },
			err => {
                console.log(err.json().message)
            },
            () => {
				this.editloader = false;
            }
			); 
	}


	followUpEditCandidate(followUpCandidateEdit: Candidate){

	    this.candidate = followUpCandidateEdit;
		this.editFollowUpLoader = true;
		this.candidateFollowUpEditSidebar = true;
		this.id = followUpCandidateEdit.candidateId;
		this.addFollowUpForm.controls['candidateId'].setValue(this.id);
		this.resourcingService.findFollowUpListById(followUpCandidateEdit.candidateId).subscribe(
            (data) => {
                this.followupList = data;
            },
			err => {
                   console.log(err.json().message)
            },
            () => { 
				this.editFollowUpLoader = false;
            }
			);
	}

	sendEnrollmentSlide(candidateEnrollment:Candidate){
		this.candidateSendEnrollmentSlidBar = true;
		this.candidate = candidateEnrollment;
   }

   enrollmentSendConfirmation(){
		this.enrollmentSendDialog = true;
	}

	sendEnrollment(){
		this.enrollmentMsg=[];
		this.enrollmentSendDialog = false;

		 this.resourcingService.enrollmentSend(this.candidate.candidateId).subscribe(
                  (data) => {
                       if(data == null){ 
					        this.enrollmentMsg.push({ severity: 'error', summary: 'Error ', detail: 'Sorry! Please Update Candidate Email' });   
					   }else{
						   this.enrollmentMsg.push({ severity: 'success', summary: 'Success', detail: 'Enrollment Form Successfully Sent' });
					   }
                   },
			       err => {
					   console.log(err);
                       this.enrollmentMsg.push({ severity: 'error', summary: 'Error ', detail: 'Enrollment Form Successfully Not Sent' });
                   },
                   () => { 
					  
                   }
			      );
	}

	viewPaymentDetails(candidatePaymentDetails:Candidate){
		this.paymentViewSlideBar = true;
		this.paymentViewLoader = true;

		this.resourcingService.paymentDetails(candidatePaymentDetails.candidateId).subscribe(
                  (data) => {
					  console.log(data);
					  this.paymentDetails = data;
                     
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
					   this.paymentViewLoader = false;
                   }
			      );	

	}

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
	saveFollowUp() {

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
					    this.resourcingService.getCandidatesList().subscribe(
							response => {
								this.candidateList = response;
							},
							err => {
									console.log(err.json().message)
							},
							() => { 
								this.editFollowUpLoader = false;
							}
        				);
                   }
			      );	
            }
        );
	}



	updateCandidate(){
       console.log("Enter UpDate");
	   this.editloader = true;
	   this.addCandidate = this.addCandidateForm.value;
	   console.log(this.addCandidate.skill);
		 var id:string;
		 this.resourcingService.updateCandidate(this.addCandidate).subscribe(
            data => {
                id = data.candidateId;

				if(data.enrollmentStstus == "Enrolled"){
				this.showEnrollment = true;
				console.log("asasasasas   "+this.showEnrollment);
			}else{
				this.showEnrollment = false;
			} 
				
                this.personalMsgs.push({ severity: 'success', summary: 'Success', detail: 'Candidate Successfully Updated' });
            },
            err => {
                console.log(err.json().message)
                this.personalMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Candidate Successfully Not Updated' });
            },
            () => { 

				this.resourcingService.getCandidatesList().subscribe(
                (data) => {
                   this.candidateList = data;
                 },
			     err => {
                  console.log(err.json().message)
                 },
                 () => { 
					  this.editloader = false;
                 }
			     );
            }
        );
	}


	callHistory(callingCandidate:Candidate){
		
       this.candidateCallHistroySlidBar = true;
	   this.callHistoryLoader = true;
	   this.resourcingService.findPhoneCallsById(callingCandidate.candidateId).subscribe(
                  (data) => {
                       this.phoneCallList = data;
					   console.log(this.phoneCallList);
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
					   this.callHistoryLoader = false;
                   }
			      );
   }

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

	lazyLoadCandidate(event: LazyLoadEvent) {
			if(this.datasource) {
                 this.candidateList = this.datasource.slice(event.first, (event.first + event.rows));
            }
               
	}


	 
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

	checkEmail(email:string){
		if(email.length){
			
	    this.resourcingService.checkEmail(btoa(email),this.id).subscribe(
         data => {
			 if(data != null){
				 if(data.candidateId != null){
                   this.showDialog = true;
				   this.showButoon = true;
				   this.candidate = data;
				   this.addCandidateForm.controls['email'].setErrors({'incorrect': true});
				   console.log(this.candidate.candidateName);
				}
			 }else{
				 console.log("validate enter");
				 this.addCandidateForm.controls['email'].setValidators([Validators.required, Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))]),
				 this.showDialog = false;
				 this.showButoon = false;
			 }	
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
		}
        );
		}			
	}


	checkAlternateEmail(email:string){
		if(email.length){
			
	    this.resourcingService.checkEmail(btoa(email),this.id).subscribe(
         data => {
			 if(data != null){
				 if(data.candidateId != null){
                   this.showDialog = true;
				   this.showButoon = true;
				   this.candidate = data;
				   this.addCandidateForm.controls['alternateEmail'].setErrors({'incorrect': true});
				   console.log(this.candidate.candidateName);
				}
			 }else{
				 console.log("validate enter");
				 this.addCandidateForm.controls['alternateEmail'].setValidators([Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))]),
				 this.showDialog = false;
				 this.showButoon = false;
			 }	
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
		}
        );
		}			
	}


	checkMobile(mobile:string){

		if(mobile.length){
			
	    this.resourcingService.checkMobile(mobile,this.id).subscribe(
         data => {
			 if(data != null){

				if(data.candidateId != null){
                   this.showDialog = true;
				   this.showButoon = false;
				   this.addCandidateForm.controls['workMobile'].setErrors({'incorrect': true});
				   this.candidate = data;
				   console.log(this.candidate.candidateName);
				}

			 }else{
				 this.addCandidateForm.controls['workMobile'].setValidators([Validators.required, Validators.pattern(("^[0-9]{10}$"))]),
				 this.showDialog = false;
				 this.showButoon = false;
			}
				
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
		}
        );

	  }
	}


	checkHomeMobile(mobile:string){

		if(mobile.length){
			
	    this.resourcingService.checkMobile(mobile,this.id).subscribe(
         data => {
			 if(data != null){

				if(data.candidateId != null){
                   this.showDialog = true;
				   this.showButoon = false;
				   this.addCandidateForm.controls['homeMobile'].setErrors({'incorrect': true});
				   this.candidate = data;
				   console.log(this.candidate.candidateName);
				}

			 }else{
				
				 this.addCandidateForm.controls['homeMobile'].setValidators([Validators.pattern(("^[0-9]{10}$"))]),
				  this.showDialog = false;
				 this.showButoon = true;
			 }
				
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
		}
        );

	  }
	}


	closeDialog(){
		 this.showDialog = false;
		 this.addCandidateForm.reset();
		 this.addCandidateForm.controls['enrollmentStstus'].setValue('New Entry');

	}
	
}