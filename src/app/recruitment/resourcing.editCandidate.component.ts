import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { ResourcingService } from './resourcing.service';
import { Candidate } from '../model/candidate.model';
import { FollowUp } from '../model/folloup.model';
import { AddCandidate } from '../model/add.candidate.model';
import { DropdownService } from '../util/dropdown.service';


import {  CandidateShow} from '../model/candidate.show.model';
import { CandidateCourse } from '../model/candidate.course.model';
import { CandidateRemarks } from '../model/candidate.remarks.model';
import { SocialMedia } from '../model/social.media.model';
import { PreferredLocation } from '../model/preferred.location.model';
import { Immigration } from '../model/candidate.imigration.model';
import { Phone } from '../model/phone.model';
import { CreatedBy } from '../model/createdby.model';


@Component({

	selector: 'resourcing-edit',
	templateUrl: 'app/recruitment/resourcing.editCandidate.html',
	
})

export class ResourcingEditCandidateComponent {
	
	showloader:boolean;

	candidateList: Candidate[];
	followupList:FollowUp[];
	selectedCandidate:Candidate;
	totalRecord: number;
	addFollowUpForm: FormGroup;
	addCandidateForm: FormGroup;
	addCandidate:AddCandidate = new AddCandidate();
	canSkills: SelectItem[];
	recStatusList: SelectItem[];
	visaList:SelectItem[];
	recSourceList:SelectItem[];
	payTypeList:SelectItem[];
	followupMsgs: Message[] = [];
	personalMsgs: Message[] = [];
	recruitmentServiceList:SelectItem[];
	showDialog:boolean;
	showButoon:boolean;
	candidate:Candidate = new Candidate();
	id:string;
	showEnrollment:boolean;

	constructor(private resourcingService:ResourcingService,private dropdownService: DropdownService,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute) {	}

	ngOnInit() {

		this.id = this.route.snapshot.params["id"];

		this.showloader = true;
		this.showDialog = false;
		this.showButoon = false;
		

		this.candidate = new Candidate();
		this.candidate.socialMedia = new SocialMedia();
		this.candidate.phones = new Array<Phone>();
		this.candidate.createdBy = new CreatedBy();

		this.canSkills = this.dropdownService.skills;
        this.recStatusList = this.dropdownService.recruitmentStatus;
	    this.visaList = this.dropdownService.candidateVisa;
		this.recSourceList = this.dropdownService.recrSource;
		this.payTypeList = this.dropdownService.candidatePayType;
        this.recruitmentServiceList = this.dropdownService.recruitmentServiceList;

	    this.addFollowUpForm = this.formBuilder.group({
			'candidateId':this.id,
			'nextFollowUpDate':new FormControl('', Validators.compose([Validators.required])),
			'followupRemarks':new FormControl('', Validators.compose([Validators.required]))
		});

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
        
		this.resourcingService.getCandidatesList().subscribe(
            (data) => {
                this.candidateList = data;
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
				this.showloader = false;
            }
			);

		this.resourcingService.findFollowUpListById(this.id).subscribe(
            (data) => {
                this.followupList = data;
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
			);

    this.resourcingService.findCandidateByIdForUpdate(this.id).subscribe(
            (data) => {
                this.addCandidate = new AddCandidate();
                this.addCandidate = data;
				console.log("Candidate"+this.addCandidate.serviceName);
                if (data.graduationDate != null) {
                this.addCandidate.graduationDate = new Date(data.graduationDate);
			}
			if(data.enrollmentStstus == "Enrolled"){
				this.showEnrollment = true;
				console.log("asasasasas   "+this.showEnrollment);
			}else{
				this.showEnrollment = false;
			}
			if (data.visaStartDate != null) {
                this.addCandidate.visaStartDate = new Date(data.visaStartDate);
            }
                this.addCandidateForm.patchValue(this.addCandidate);
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
			); 
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


	saveFollowUp() {

         var id:string;
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
                   }
			      );	
            }
        );
	}


	updateCandidate(){
       console.log(this.addCandidateForm.value);
	   this.addCandidate = this.addCandidateForm.value;
	   
		 var id:string;
		 this.resourcingService.updateCandidate(this.addCandidateForm.value).subscribe(
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
                 }
			     );
            }
        );
	}

	


	/*lazyLoadCandidate(event: LazyLoadEvent) {
		//this.candidateList = [];
		this.resourcingService.getLazyCandidate(event).subscribe(
			response => {
				this.candidateList = response.data;
				this.totalRecord = response.totalRecord;
			})
	}*/

	 onRowSelect(event:any) {
		 console.log("Candidate Id"+this.selectedCandidate.candidateId);

		 this.id = this.selectedCandidate.candidateId;

		 this.resourcingService.findFollowUpListById(this.selectedCandidate.candidateId).subscribe(
            (data) => {
                this.followupList = data;
				
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
				
            }
			);

    this.resourcingService.findCandidateByIdForUpdate(this.selectedCandidate.candidateId).subscribe(
		
            (data) => {
                this.addCandidate = new AddCandidate();
                this.addCandidate = data;
				console.log("Date"+this.addCandidate.serviceName);
                if (data.graduationDate != null) {
                this.addCandidate.graduationDate = new Date(data.graduationDate);
			}
			if(data.enrollmentStstus == "Enrolled"){
				this.showEnrollment = true;
				console.log("asasasasas2 "+this.showEnrollment);
			}else{
				
				this.showEnrollment =false;
			}
			if (data.visaStartDate != null) {
                this.addCandidate.visaStartDate = new Date(data.visaStartDate);
            }
                this.addCandidateForm.patchValue(this.addCandidate);
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
			); 
    }


	

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



}