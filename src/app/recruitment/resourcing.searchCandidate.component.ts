import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ResourcingService } from './resourcing.service';
import { CandidateFollowUpComponent } from './resourcing.addfollowup.component';
import { DropdownService } from '../util/dropdown.service';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import { Candidate } from '../model/candidate.model';


@Component({

	selector: 'resourcingCandidateSearch',
	templateUrl: 'app/recruitment/resourcing.searchCandidate.html',
	
})

export class SearchCandidateComponent {
	
	
    candidateList: Candidate[];
	searchCandidateForm: FormGroup;
	
	showDataTablePanel: boolean;
    showNoaData:boolean;
    showText:boolean;
	
	constructor(private formBuilder: FormBuilder,
	   private resourcingService:ResourcingService, private router: Router) {	}

	ngOnInit() {
	
        this.showDataTablePanel = false;
        this.showNoaData = false;
        this.showText = true;

		this.searchCandidateForm = this.formBuilder.group({
			'searchValue': ''
		});
	}

	
	searchCandidate() {
		 this.resourcingService.getSearchCandidate(this.searchCandidateForm.value).subscribe(
            data => {
                
                this.candidateList = data;
                if(this.candidateList == null){
                     this.showDataTablePanel = false;
                    this.showNoaData = true;
                    this.showText = false;
                }else{
                        if(this.candidateList.length > 0){
                            this.showDataTablePanel = true;
                            this.showNoaData = false;
                            this.showText = false;
                        }else{
                            this.showDataTablePanel = false;
                            this.showNoaData = true;
                            this.showText = false;
                        }
                } 
            },
            err => {
                console.log(err.json().message);
            },
            () => { 
            }
        );  
	}

	
	
}