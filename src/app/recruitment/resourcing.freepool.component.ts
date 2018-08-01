import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ResourcingService } from './resourcing.service';
import { CandidateFollowUpComponent } from './resourcing.addfollowup.component';
import { DropdownService } from '../util/dropdown.service';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule,DialogModule} from 'primeng/primeng';
import { FreePoolCandidate } from '../model/freepool.candidate.model'; 
import { MaxFollowup } from '../model/max_followup.model'; 
import { Candidate } from '../model/candidate.model';   
import { FollowUp } from '../model/folloup.model';  
import { SocialMedia } from '../model/social.media.model';
import { PreferredLocation } from '../model/preferred.location.model';
import { Immigration } from '../model/candidate.imigration.model';
import { Phone } from '../model/phone.model';
import { CreatedBy } from '../model/createdby.model';   

@Component({
	selector: 'resourcing',
	templateUrl: 'app/recruitment/resourcing.freepoolCandidate.html',
    styleUrls: ['./app/recruitment/recruitment.css']
})

export class FreePoolComponent {

    freePoolCandidateList: MaxFollowup[];
    selectedFreepoolCandidate:MaxFollowup;
    items: MenuItem[];
    candidate:Candidate;
    candidateViewSidebar:boolean;
    viewDetailsLoader:boolean;
    followupList:FollowUp[];
    addFollowUpForm: FormGroup;
    canId:string;
    followupMsgs: Message[] = [];
    candidatePullSidebar:boolean;
    candidatePullLoader:boolean;

    constructor(private formBuilder: FormBuilder,private resourcingService:ResourcingService,private router: Router) {	}

    ngOnInit() {
        this.candidateViewSidebar = false;
        this.viewDetailsLoader = false;
        this.candidatePullSidebar = false;
        this.candidatePullLoader = false;
        this.followupList = [];
        this.candidate = new Candidate();
		this.candidate.socialMedia = new SocialMedia();
		this.candidate.phones = new Array<Phone>();
		this.candidate.createdBy = new CreatedBy();
        this.canId = null;
        this.followupMsgs = [];

        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewCandidate(this.selectedFreepoolCandidate)},
			{label: 'Pull', icon: 'fa-edit', command: (event) => this.getCandidate(this.selectedFreepoolCandidate)}
        ];

           this.resourcingService.findFreePoolCandidates().subscribe(
            (data) => {
                this.freePoolCandidateList = data;
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
			); 

            this.addFollowUpForm = this.formBuilder.group({
			'candidateId':'',
			'nextFollowUpDate':new FormControl('', Validators.compose([Validators.required])),
			'followupRemarks':new FormControl('', Validators.compose([Validators.required]))
		});
    }


     getCandidate(maxFollowup:MaxFollowup){
          this.candidatePullSidebar = true;
          this.candidatePullLoader = true;
          this.canId = maxFollowup.candidateId;
          this.resourcingService.findCandidateByIdForshow(maxFollowup.candidateId).subscribe(
            (data) => {
                this.candidate = data;
                console.log(this.candidate);
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
                this.candidatePullLoader = false;
                
            }
			); 
     }


     viewCandidate(maxFollowup:MaxFollowup){
        
         this.candidateViewSidebar = true;
	   this.viewDetailsLoader = true;
	   this.resourcingService.findCandidateByIdForshow(maxFollowup.candidateId).subscribe(
                  (data) => {
                       this.candidate = data;
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
                       this.resourcingService.findFollowUpListById(maxFollowup.candidateId).subscribe(
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
			      );	
     }


     saveFollowUp() {
         this.followupMsgs = [];
       this.addFollowUpForm.controls['candidateId'].setValue(this.canId);
       this.resourcingService.updateFollowupForFreepool(this.addFollowUpForm.value).subscribe(
            data => {
               console.log(data);
               this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
            },
            err => {
                this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
            },
            () => { 
				this.resourcingService.findFreePoolCandidates().subscribe(
                (data) => {
                this.freePoolCandidateList = data;
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


    /* onRowSelect(event:any) {
		 console.log("Freepool Candidate Id : : :  : "+this.selectedFreepoolCandidate.candidateId);
		 var id:string;
		 id = this.selectedFreepoolCandidate.candidateId
         this.router.navigate(['recruitment/editFreepoolCandidate',id]);
    } */
	
}