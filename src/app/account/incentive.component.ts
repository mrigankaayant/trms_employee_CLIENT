import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators,FormArray } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{AccountService} from './account.service';
import { SelectItem, Message} from 'primeng/primeng';
import { Employee } from '../model/employee.model';
import { DropdownService } from '../util/dropdown.service';
import {PaymentDto} from '../model/payment.dto.model';
@Component({

	selector: 'account',
	templateUrl: 'app/account/incentive.html',
	styleUrls: ['./app/account/account.css']
})


export class IncenTiveComponent{
	months: SelectItem[];
    years: SelectItem[];
	checkIncentive: FormGroup;
    employeeName: SelectItem[];
	individulaPaymentDto:PaymentDto;
    teamLeaderPaymentDto:PaymentDto;
   
	showLoader:boolean
    constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
	private router: Router,private accountService:AccountService,private dropdownService:DropdownService) {

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
		this.showLoader = false;
		this.employeeName = this.dropdownService.emoloyeeNames;


		 this.checkIncentive = this.formBuilder.group({
			'employeeID': new FormControl('', Validators.compose([Validators.required])),
			'selectedMonth': new FormControl('', Validators.compose([Validators.required])),
            'selectedYear': new FormControl('', Validators.compose([Validators.required]))
		});
    }

	sendIncentiveMonthYear(){
        this.showLoader = true;
        this.accountService.ownPaymentByMonthYearEmpID(this.checkIncentive.value.selectedMonth,this.checkIncentive.value.selectedYear,this.checkIncentive.value.employeeID).subscribe(
         data => {
			 console.log(data);
              this.individulaPaymentDto = data;
			 
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			this.accountService.teamPaymentByMonthYearrEmpID(this.checkIncentive.value.selectedMonth,this.checkIncentive.value.selectedYear,this.checkIncentive.value.employeeID).subscribe(
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