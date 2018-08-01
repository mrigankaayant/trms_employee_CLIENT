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
import { IncentiveStructure } from '../model/incentivestructure.model';



@Component({

	selector: 'resourcing',
	templateUrl: 'app/recruitment/resourcing.incentiveList.html'
})

export class IncentiveListComponent implements OnInit{ 


	individualIncentiveList:IncentiveStructure[];
	teamLeaderIncentiveList:IncentiveStructure[];
	
	
	constructor(private formBuilder: FormBuilder,private resourcingService:ResourcingService,private router: Router) {	}

    ngOnInit(){

		 this.resourcingService.findIncentiveList("Individual").subscribe(
         response => {
			 this.individualIncentiveList = response;
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
		}
        ); 

		this.resourcingService.findIncentiveList("Team Leader").subscribe(
         response => {
			 this.teamLeaderIncentiveList = response;
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
		}
        ); 
          
	 }
	
}