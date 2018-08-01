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
import { PhoneLogs } from '../model/phonelogs.model';


@Component({ 

	selector: 'resourcing',
	templateUrl: 'app/recruitment/callHistoryList.html'
})

export class CallHistoryComponent implements OnInit{

	 callHistoryList:PhoneLogs[];
     showloader:boolean;

     constructor(private formBuilder: FormBuilder,private resourcingService:ResourcingService, private dropdownService: DropdownService,private router: Router) {	}

     ngOnInit(){
         this.showloader = true;

		 this.resourcingService.findCallHistory().subscribe(
         response => {
			 this.callHistoryList = response;
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
            this.showloader = false;
		}
        ); 
          
	 }
	
}