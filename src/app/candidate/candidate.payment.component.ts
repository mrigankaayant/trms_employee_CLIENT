import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators,FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DropdownService } from '../util/dropdown.service';
import { SelectItem, Message, LazyLoadEvent, TabViewModule,
	     SplitButtonModule, MenubarModule,MenuItem, TabMenuModule} from 'primeng/primeng';

import{CandidateService} from './candidate.service';
import { UserMst } from '../model/user.mst.model';
import { PaymentModel } from '../model/candidate.payment.model';



@Component({

	selector: 'payment',
	templateUrl: 'app/candidate/paymentForm.html',
	styleUrls: ['./app/candidate/candidate.css']
})

export class PaymentComponent {

    id:string;
    paymentForm: FormGroup;
	canSkills: SelectItem[];
	showloader:boolean;

	constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
	private dropdownService: DropdownService,private router: Router,private candidateService:CandidateService) {
	  	
	}

	ngOnInit() {
		    this.showloader = false;
		    this.canSkills = [];
            let id = this.route.snapshot.params["id"];
			this.canSkills = this.dropdownService.skills;
        	this.paymentForm = this.formBuilder.group({
			'coureseName': new FormControl('', Validators.compose([Validators.required])),
			'amount': new FormControl('', Validators.compose([Validators.required])),
			'firstName': new FormControl('', Validators.compose([Validators.required])),
			'lastName': new FormControl('', Validators.compose([Validators.required])),
			'email': new FormControl('', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])),
			'phone': new FormControl('',  Validators.compose([Validators.required,Validators.pattern("^[0-9]{10}$")])),
			'pricePerItem': new FormControl('', Validators.compose([Validators.required])),
			'quantity': new FormControl('1', Validators.compose([Validators.required]))
		});

    }

    paymentThroughPaypal(){

		if(this.paymentForm.valid == false){
			console.log("First Block")
			if(this.paymentForm.value.coureseName == null || this.paymentForm.value.coureseName == ''){
				this.paymentForm.controls['coureseName'].markAsDirty();
			}

			if(this.paymentForm.value.amount == null || this.paymentForm.value.amount == ''){
				this.paymentForm.controls['amount'].markAsDirty();
			}

			if(this.paymentForm.value.firstName == null || this.paymentForm.value.firstName == ''){
				this.paymentForm.controls['firstName'].markAsDirty();
			}

			if(this.paymentForm.value.lastName == null || this.paymentForm.value.lastName == ''){
				this.paymentForm.controls['lastName'].markAsDirty();
			}

			if(this.paymentForm.value.email == null || this.paymentForm.value.email == ''){
				this.paymentForm.controls['email'].markAsDirty();
			}

			if(this.paymentForm.value.phone == null || this.paymentForm.value.phone == ''){
				this.paymentForm.controls['phone'].markAsDirty();
			}

			if(this.paymentForm.value.pricePerItem == null || this.paymentForm.value.pricePerItem == ''){
				this.paymentForm.controls['pricePerItem'].markAsDirty();
			}

			if(this.paymentForm.value.quantity == null || this.paymentForm.value.quantity == ''){
				this.paymentForm.controls['quantity'].markAsDirty();
			}
		}

	if(this.paymentForm.valid == true){
       this.candidateService.makePayment(this.paymentForm.value).subscribe(
            data => {
				 window.location.href = data.redirect_url;
            },
            err => {
                console.log(err.json().message)
                
            },
            () => { 
					this.showloader = true;
				 	console.log("success");
            }
        ); 
	  }
    }
   

}