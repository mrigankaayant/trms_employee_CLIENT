import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ResourcingService } from './resourcing.service';
import { DropdownService } from '../util/dropdown.service';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { SelectItem, Message} from 'primeng/primeng';
import {PaymentDetails} from '../model/payment.details.model';
import{Payment} from '../model/payment.model';
import{Payer} from '../model/payer.model';
import {PayerInfo} from '../model/payer.info.model';
import {ShippingAddress} from '../model/shippingAddress.model';
import {Transaction} from '../model/transaction.model';
import {ItemList} from '../model/itemList.model';
import {Item} from '../model/items.model';
import {Amount} from '../model/amount.model';
import {Details} from '../model/details.model';
import {PaymentDto} from '../model/payment.dto.model';

 @Component({

	selector: 'incentive',
	templateUrl: 'app/recruitment/resourcing.employeeincentive.html',
	styleUrls: ['./app/recruitment/recruitment.css']
})

export class EmployeeIncentive{
   showLoader:boolean;
   individulaPaymentDto:PaymentDto;
   teamLeaderPaymentDto:PaymentDto;
   ownPaymentDetails:PaymentDetails[];
   teamPaymentDetails:PaymentDetails[];
   checkIncentive: FormGroup;
   months: SelectItem[];
   years: SelectItem[];

   constructor(private formBuilder: FormBuilder,private resourcingService:ResourcingService, private dropdownService: DropdownService,private router: Router) {	

        this.months = [
            {label: 'Select Month', value: ''},
            {label: 'January', value: 'JANUARY'},
            {label: 'February', value: 'FEBRUARY'},
            {label: 'March', value: 'MARCH'},
            {label: 'April', value: 'APRIL'},
            {label: 'May', value: 'MAY'},
            {label: 'June', value: 'JUNE'},
            {label: 'July', value: 'JULY'},
            {label: 'August', value: 'AUGUST'},
            {label: 'September', value: 'SEPTEMBER'},
            {label: 'October', value: 'OCTOBER'},
            {label: 'November', value: 'NOVEMBER'},
            {label: 'December', value: 'DECEMBER'},
        ];

        this.years = [
            {label: 'Select Year', value: ''},
            {label: '2017', value: '2017'},
            {label: '2018', value: '2018'},
            {label: '2019', value: '2019'},
            {label: '2020', value: '2020'},
            {label: '2021', value: '2021'},
            {label: '2022', value: '2022'},
            {label: '2023', value: '2023'},
            {label: '2024', value: '2024'},
            {label: '2025', value: '2025'},
            {label: '2026', value: '2026'},
            {label: '2027', value: '2027'},
            {label: '2028', value: '2028'},
        ];
   }

   ngOnInit() {
       this.showLoader = true;
       this.resourcingService.ownPayment().subscribe(
         data => {
			 console.log(data);
              this.individulaPaymentDto = data;
			 
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			this.resourcingService.teamPayment().subscribe(
         data => {
			 console.log(data);
			 this.teamLeaderPaymentDto = data;
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			this.showLoader = false;
		}
        );
		}
        );



        this.checkIncentive = this.formBuilder.group({
			'selectedMonth': new FormControl('', Validators.compose([Validators.required])),
            'selectedYear': new FormControl('', Validators.compose([Validators.required]))
		});
        
   }

   sendIncentiveMonthYear(){
   
        this.resourcingService.ownPaymentByMonthYear(this.checkIncentive.value.selectedMonth,this.checkIncentive.value.selectedYear).subscribe(
         data => {
			 console.log(data);
              this.individulaPaymentDto = data;
			 
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			this.resourcingService.teamPaymentByMonthYear(this.checkIncentive.value.selectedMonth,this.checkIncentive.value.selectedYear).subscribe(
         data => {
			 console.log(data);
			 this.teamLeaderPaymentDto = data;
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			this.showLoader = false;
		}
        );
		}
        );
	 
   
   }

}