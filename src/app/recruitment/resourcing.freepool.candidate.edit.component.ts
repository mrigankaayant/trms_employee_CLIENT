import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { DropdownService } from '../util/dropdown.service';
import { ResourcingService } from './resourcing.service';
import { FreePoolCandidate } from '../model/freepool.candidate.model';   
import { FollowUp } from '../model/folloup.model';   
import { AddCandidate } from '../model/add.candidate.model';   


@Component({ 
	selector: 'resourcing-edit-freepool',
	templateUrl: 'app/recruitment/resourcing.editFreepoolCandidate.html',
})

export class EditFreepoolCandidateComponent {

	candidateListInFreepool: FreePoolCandidate[];
    selectedCandidateInFreepool:FreePoolCandidate;
	followUpFormForFreepool: FormGroup;
	candidateFollowupList:FollowUp[];
	followupMsgs: Message[] = [];
	candidate:AddCandidate = new AddCandidate();
	
	
	constructor(private resourcingService:ResourcingService,private dropdownService: DropdownService,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute) {	}

	ngOnInit() {

		   let id = this.route.snapshot.params["id"];
		   this.candidate = new AddCandidate();

           this.selectedCandidateInFreepool = null;
           this.resourcingService.findFreePoolCandidates().subscribe(
            (data) => {
                this.candidateListInFreepool = data;
                console.log(this.candidateListInFreepool);
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
			);

            this.followUpFormForFreepool = this.formBuilder.group({
			'candidateId':id,
			'nextFollowUpDate':'',
			'followupRemarks':''
		    });

        
		this.resourcingService.findFollowUpListById(id).subscribe(
            (data) => {
                this.candidateFollowupList = data;
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
		);

        this.resourcingService.findCandidateByIdForUpdate(id).subscribe(
            (data) => {
                this.candidate = new AddCandidate();
                this.candidate = data;
                //if (data.graduationDate != null) {
                //this.selectedAddcandidate.graduationDate = new Date(data.graduationDate);
			    //}
			    //if (data.visaStartDate != null) {
                 //   this.selectedAddcandidate.visaStartDate = new Date(data.visaStartDate);
                //}
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
			);  
	}


	 onRowSelect(event:any) {
		 var id:string;
		 id = this.selectedCandidateInFreepool.candidateId;

        this.resourcingService.findFollowUpListById(id).subscribe(
            (data) => {
                this.candidateFollowupList = data;
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            }
		);

        this.resourcingService.findCandidateByIdForUpdate(id).subscribe(
            (data) => {
                this.candidate = new AddCandidate();
                this.candidate = data;
                //if (data.graduationDate != null) {
                //this.selectedAddcandidate.graduationDate = new Date(data.graduationDate);
			    //}
			    //if (data.visaStartDate != null) {
                 //   this.selectedAddcandidate.visaStartDate = new Date(data.visaStartDate);
                //}
            },
			err => {
                console.log(err.json().message)
            },
            () => { 
            } 
			);  
    }

  

	 saveFollowUp(){
		 var id:string;
		 this.resourcingService.addFollowupForFreepool(this.followUpFormForFreepool.value).subscribe(
            data => {
                id = data.candidateInfo.candidateId;
				this.followupMsgs.push({ severity: 'success', summary: 'Success', detail: 'Follow Up Successfully Updated' });
            },
            err => {
				 this.followupMsgs.push({ severity: 'error', summary: 'Error ', detail: 'Follow Up Successfully Not Updated' });
            },
            () => { 
                 
                  this.followUpFormForFreepool.reset();

				  this.resourcingService.findFollowUpListById(id).subscribe(
                  (data) => {
                       this.candidateFollowupList = data;
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
                   }
			      );

                 this.resourcingService.findFreePoolCandidates().subscribe(
                 (data) => {
                    this.candidateListInFreepool = data;
                    console.log(this.candidateListInFreepool);
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
}