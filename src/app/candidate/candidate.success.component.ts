import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators,FormArray } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import{CandidateService} from './candidate.service';



@Component({

	selector: 'success',
	templateUrl: 'app/candidate/successPayment.html',
	styleUrls: ['./app/candidate/candidate.css']
})

export class SuccessComponent {
	
	paymentId:string;
    payerId:string;

	constructor(private router: Router,private route: ActivatedRoute,private candidateService:CandidateService) {
	  
		
	}

	ngOnInit() {
           this.route.queryParams.subscribe(params => {
            this.paymentId = params['paymentId'];
            //let value_2 = params['token'];
            this.payerId = params['PayerID'];
            //console.log(value_1);
        });
       

        this.candidateService.goToSuccess(this.paymentId,this.payerId).subscribe(
         data => {
                    console.log(data);
			       
         },
         err => {
                console.log(err);
         },
        () => { 
            
            
        }
        );
			
    }

    goToLogin(){
       sessionStorage.clear();
       this.router.navigate(['login']);
    }
}