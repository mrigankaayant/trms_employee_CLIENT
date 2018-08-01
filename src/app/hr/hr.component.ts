import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule} from 'primeng/primeng';


@Component({

	selector: 'hr',
	templateUrl: 'app/hr/hr.html',
	
})

export class HrComponent {
	
	//candidateList: CandidateModel[];
	totalRecord: number;
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
	constructor(private formBuilder: FormBuilder, 
	            private router: Router) {
	
		
	}

	ngOnInit() {
		
		this.addCandidateForm = this.formBuilder.group({
			'candidateCode': '',
			'firstName': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*")])),
			'payType': '',
			'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"))])),
			'payRate': new FormControl('', Validators.compose([ Validators.pattern("[1-9][0-9]*|0")])),
			'altEmail': new FormControl('', Validators.compose([Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
			'graduationDate': '',
			'wrkMobile': new FormControl('',  Validators.compose([Validators.required,Validators.pattern("^[0-9]{10}$")])),
			'currLocation': '', 
			'homeMobile': new FormControl('', Validators.compose([Validators.pattern("^[0-9]{10}$")])),
			'prefLoc': '',
			'recSource': '',
			'skill': '',
			'visa': '', 
			'fee': '',
			'visaStartDate': '',
			'recStatus': ''
			
		});

		this.addFollowUpForm = this.formBuilder.group({
			'remrks': '',
			'nxtFollowUpDate': ''
		})

	}

	 

	lazyLoadCandidate(event: LazyLoadEvent) {
		//this.candidateList = [];
		/*this.resourcingService.getLazyCandidate(event).subscribe(
			response => {
				this.candidateList = response.data;
				this.totalRecord = response.totalRecord;
			})*/
	}

	onRowSelect(event: any) {
		document.getElementById("dt-table").style.width = "58.3333%";
	}

	saveCandidate() {
        //this.router.navigate(['recruitment/showFollowUpDetails']);
	}

	editFollowUp() {
	 this.showFollowForm = false;
     this.updateCandidateForm = true;
	}

	updateCandidate(){
		
	}

	 goToLogin(){
	   sessionStorage.clear();
       this.router.navigate(['login']);
    }
}