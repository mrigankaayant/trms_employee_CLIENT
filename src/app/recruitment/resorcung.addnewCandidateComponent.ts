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

@Component({

	selector: 'resourcing',
	templateUrl: 'app/recruitment/resourcing.addNewCandidate.html',
	styleUrls: ['./app/recruitment/recruitment.css']
})

export class AddCandidateComponent {

	showloader:boolean;

	candidateList: Candidate[];
	//selectedCandidate:Candidate;
	//totalRecord: number;
	//datasource: Candidate[];
	//selectedCandidate: CandidateModel;
	menuBar: MenuItem[];
	canSkills: SelectItem[];
	recStatusList: SelectItem[];
	visaList:SelectItem[];
	recSourceList:SelectItem[];
	payTypeList:SelectItem[];
	addCandidateForm: FormGroup;
	addFollowUpForm: FormGroup;
	//hideCandidateForm: boolean;
	//showFollowForm: boolean;
	//updateCandidateForm : boolean;
    //isLoaded : boolean;
	showDialog:boolean;
	recruitmentServiceList:SelectItem[];
	candidate:Candidate = new Candidate();
	//totalRecords: number;
	items: MenuItem[];
	//candidateViewSidebar:boolean;
	followupList:FollowUp[];
	//confirmationDialog:boolean;
	//candidateEditSidebar:boolean;

	constructor(private formBuilder: FormBuilder,private resourcingService:ResourcingService, private dropdownService: DropdownService,private router: Router) {	}

	ngOnInit() {
        this.candidate = new Candidate();
		this.candidate.socialMedia = new SocialMedia();
		this.candidate.phones = new Array<Phone>();
		this.candidate.createdBy = new CreatedBy();
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
			'enrollmentStstus':'New Entry',
			'serviceName':'',
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
	}

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

	saveCandidate() {
		this.showloader = true;
		 var id:string;
		 console.log(this.addCandidateForm.value);
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
				  this.showloader = false;
                  this.router.navigate(['recruitment/showFollowUpDetails',id]);
            }
        );
	}

	/*editFollowUp() {
	 this.showFollowForm = false;
     this.updateCandidateForm = true;
	}*/

 

	checkEmail(email:string){
		var id = '0';
		if(email.length){
			
	    this.resourcingService.checkEmail(btoa(email),id).subscribe(
         data => {
			 if(data != null){
				 if(data.candidateId != null){
                   this.showDialog = true;
				   this.candidate = data;
				   console.log(this.candidate.candidateName);
				}
			 }else{
				 //console.log("asasas");
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
        var id = '0';
		if(mobile.length){
			
	    this.resourcingService.checkMobile(mobile,id).subscribe(
         data => {
			 if(data != null){

				if(data.candidateId != null){
                   this.showDialog = true;
				   this.candidate = data;
				}

			 }else{
				 
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
