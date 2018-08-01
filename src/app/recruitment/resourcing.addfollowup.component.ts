import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem, ConfirmationService } from 'primeng/primeng';
import { ResourcingService } from './resourcing.service';
import { FollowupCandidateInfo } from '../model/followUp.candidate.info.model';
import { Candidate } from '../model/candidate.model';
import { SocialMedia } from '../model/social.media.model';

@Component({
	selector: 'resourcingFollowUp',
	templateUrl: "app/recruitment/resourcing.addfollowup.html",
	styleUrls:['app/recruitment/recruitment.css']
})
export class CandidateFollowUpComponent implements OnInit {
	
	showloader:boolean;
	//candidateList: CandidateModel[];
	//candidateList: Candidate[];
	//totalRecord: number;
	//selectedCandidate: CandidateModel;
	selectedCandidate: Candidate;
	//canId: number;
	//menuBar: MenuItem[];
	//recStatusSelectIteam: SelectItem[] = [];
	//addCandidateForm: FormGroup;
	addFollowUpForm: FormGroup;
	//hideCandidateForm: boolean;
	//showFollowForm: boolean;
	//editFollowForm: boolean;
	//updateCandidateForm: boolean;
	//isFollowUp:boolean;
	//isFollowUpDetails:boolean;
    //followupCandidateInfo:FollowupCandidateInfo = new FollowupCandidateInfo();
	candidate:Candidate = new Candidate();

	constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,private resourcingService:ResourcingService) {

		//this.showFollowForm = true; 
		//this.editFollowForm = true;
		//this.updateCandidateForm = false;
		//this.isFollowUp = false;
		//this.isFollowUpDetails = true;
	}

	ngOnInit() {
		this.showloader = true;
		this.candidate.socialMedia = new SocialMedia();
		this.candidate.preferredLocations = [];
		this.candidate.immigrations = [];
		this.candidate.candidateCourses = [];
		this.candidate.phones = [];

		//this.resourcingService.getCandidatesList().subscribe(response => this.candidateList = response,error => console.log(error));

		/*this.resourcingService.getCandidatesList().subscribe(
         response => {
			this.candidateList = response
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			 this.showloader = false;
		}
        );*/
		
		let id = this.route.snapshot.params["id"];

		this.addFollowUpForm = this.formBuilder.group({
			'candidateId':id,
			'nextFollowUpDate': new FormControl('', Validators.compose([Validators.required])),
			'followupRemarks': new FormControl('', Validators.compose([Validators.required]))
		})

       this.resourcingService.findCandidateByIdForshow(id).subscribe(
            data => {
                this.candidate = new Candidate();
                this.candidate = data;
            },
            err => {
                console.log(err.json().message)
            },
            () => { 
				this.showloader = false;
				console.log('Authentication Complete') 
			}
        );
	}

 
	saveFollowUp() {
       
         var id:string;
		 this.showloader = true;
		 this.resourcingService.addFollowup(this.addFollowUpForm.value).subscribe(
            data => {
                id = data.candidateInfo.candidateId;
            },
            err => {
            },
            () => { 
				  this.showloader = false;
                  this.router.navigate(['recruitment/showCandidateFollowupDetails',id]);
            }
        );

	}





	lazyLoadCandidate(event: LazyLoadEvent) {
		//this.candidateList = [];
		/*this.resourcingService.getLazyCandidate(event).subscribe(
			response => {
				this.candidateList = response.data;
				this.totalRecord = response.totalRecord;
			})*/
	}

	/*onRowSelect(event: any) {
		//document.getElementById("dt-table").style.width = "58.3333%";
		 var id:string;
		  id = this.selectedCandidate.candidateId
         this.router.navigate(['recruitment/editCandidate',id]);


	}*/

	

}