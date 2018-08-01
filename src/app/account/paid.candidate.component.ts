import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators,FormArray } from '@angular/forms';
import { Message,ContextMenuModule,MenuItem,DialogModule} from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{AccountService} from './account.service';
import {PaymentDetails} from '../model/payment.details.model';
import { Candidate } from '../model/candidate.model';
import { SocialMedia } from '../model/social.media.model';
import { PreferredLocation } from '../model/preferred.location.model';
import { Immigration } from '../model/candidate.imigration.model';
import { Phone } from '../model/phone.model';
import { FollowUp } from '../model/folloup.model';
import { CreatedBy } from '../model/createdby.model'; 
import{Payment} from '../model/payment.model';
import{Payer} from '../model/payer.model';
import {PayerInfo} from '../model/payer.info.model';
import {ShippingAddress} from '../model/shippingAddress.model';
import {Transaction} from '../model/transaction.model';
import {ItemList} from '../model/itemList.model';
import {Item} from '../model/items.model';
import {Amount} from '../model/amount.model';
import {Details} from '../model/details.model';
@Component({

	selector: 'account',
	templateUrl: 'app/account/paidCandidateList.html',
	styleUrls: ['./app/account/account.css']
})


export class PaidCandidateComponent{

	allPaidCandidateList:PaymentDetails[];
	showloader:boolean;
	items: MenuItem[];
	selectedCandidate:Candidate;
	candidateViewSidebar:boolean;
	candidate:Candidate = new Candidate();
	viewDetailsLoader:boolean;
	paymentViewSlideBar:boolean;
	paymentViewLoader:boolean;
	paymentDetails:PaymentDetails[];
    paymentDetail:PaymentDetails;
    constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private accountService:AccountService) {
	  
	}

    ngOnInit() {
		this.candidateViewSidebar = false;
		this.candidate = new Candidate();
		this.candidate.socialMedia = new SocialMedia();
		this.candidate.phones = new Array<Phone>();
		this.candidate.createdBy = new CreatedBy();
		this.viewDetailsLoader = false;
		this.paymentViewSlideBar = false;
		this.paymentViewLoader = false;

		this.paymentDetail = new PaymentDetails();
        this.paymentDetail.paymentInfo = new Payment();
        this.paymentDetail.paymentInfo.payer = new Payer();
        this.paymentDetail.paymentInfo.payer.payerInfo = new PayerInfo();
        this.paymentDetail.paymentInfo.payer.payerInfo.shippingAddress = new ShippingAddress();
        this.paymentDetail.paymentInfo.transactions = new Transaction();
        this.paymentDetail.paymentInfo.transactions.itemList = new ItemList();
        this.paymentDetail.paymentInfo.transactions.itemList.item = new Item();
        this.paymentDetail.paymentInfo.transactions.amount = new Amount();
        this.paymentDetail.paymentInfo.transactions.amount.details = new Details();


		this.accountService.getAllPaidCandidateList().subscribe(
         response => {
			 this.allPaidCandidateList = response;
			 console.log("asas"+this.allPaidCandidateList.length);
         },
         err => {
         },
        () => { 
			 
		}
        );

		this.items = [
            {label: 'View Candidate Info', icon: 'fa-search', command: (event) => this.viewCandidate(this.selectedCandidate)},
			{label: 'View Payment Details', icon: 'fa fa-money', command: (event) => this.viewPaymentDetails(this.selectedCandidate)}
            
        ];
    }


	viewCandidate(candidateView: Candidate) {
	   this.candidateViewSidebar = true;
       //this.candidate = candidateView;
	   this.viewDetailsLoader = true;
	   console.log(this.candidate);
	   this.accountService.findCandidateById(candidateView.candidateId).subscribe(
                  (data) => {
					  //console.log(data);
                      this.candidate = data;
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
					   this.viewDetailsLoader = false;
                   }
			      );	
    }

	viewPaymentDetails(candidatePaymentDetails:Candidate){
		this.paymentViewSlideBar = true;
		this.paymentViewLoader = true;

		this.accountService.paymentDetails(candidatePaymentDetails.candidateId).subscribe(
                  (data) => {
					  console.log(data);
					  this.paymentDetails = data;
                     
                   },
			       err => {
                      console.log(err.json().message)
                   },
                   () => { 
					   this.paymentViewLoader = false;
                   }
			      );	

	}


}