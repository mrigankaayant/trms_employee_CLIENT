import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfessionalTax } from './model/ProfessionalTax.model';
import { ProfessionalTaxService } from './admin.professionalTaxService.component'; 

@Component({

	selector: 'prefessionalTax',
	templateUrl: 'app/admin/prefessionalTaxList.html'
})
export class ProfessionalTaxComponent implements OnInit {

    professionalTaxs:ProfessionalTax[];

    constructor(private ProfessionalTaxService:ProfessionalTaxService){}

   ngOnInit(){
        this.ProfessionalTaxService.getProfessionalTaxs().subscribe(response => this.professionalTaxs = response,error => console.log(error));
    }
}