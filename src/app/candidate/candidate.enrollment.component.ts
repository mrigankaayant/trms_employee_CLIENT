import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators,FormArray } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DropdownService } from '../util/dropdown.service';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule} from 'primeng/primeng';

import{CandidateService} from './candidate.service';
import { UserMst } from '../model/user.mst.model';
import { PaymentDetails } from '../model/paymentDetails.model';


@Component({

	selector: 'enrollment',
	templateUrl: 'app/candidate/candidateEnrollment.html',
	styleUrls: ['./app/candidate/candidate.css']
})

export class EnrollmentComponent {
	userMst:UserMst;
    id:string;
    showloader:boolean;
    candidateId:string;
    paymentDetails:PaymentDetails[];
	
	constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private candidateService:CandidateService) {
	  
		
	}

	ngOnInit() {
        this.paymentDetails = [];
        this.showloader = true;
        this.candidateId = this.route.snapshot.params["id"];
        /*this.candidateService.getUserType().subscribe(
         data => {
			        this.userMst = data;
         },
         err => {
                console.log(err);
         },
        () => { 
            this.id = this.userMst.userId;
            console.log(this.id);
            this.candidateService.getCandidateDetailsByUserId(this.id).subscribe(
         data => {
			       this.candidateId = data.candidateId;
         },
         err => {
                console.log(err);
         },
        () => { 

            this.candidateService.getPaymentDetails(this.candidateId).subscribe(
         data => {
                    console.log(data);
			        this.paymentDetails = data;
         },
         err => {
                console.log(err);
         },
        () => { 
            console.log(this.id);
            this.showloader = false;
        }
        );
			
		} 
        );
            
        }
        );*/

        this.candidateService.getPaymentDetails(this.candidateId).subscribe(
         data => {
                    console.log(data);
			        this.paymentDetails = data;
         },
         err => {
                console.log(err);
         },
        () => { 
            console.log(this.id);
            this.showloader = false;
        }
        );
			
		 
        


    }

}