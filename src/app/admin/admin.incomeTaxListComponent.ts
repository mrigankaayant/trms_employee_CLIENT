import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IncomeTaxService } from './admin.incomeTax.service';
import { IncomeTax } from './model/incomeTax.model';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';


@Component({

	selector: 'incomeTax',
	templateUrl: 'app/admin/incomeTaxList.html'
})
export class IncomeTaxComponent implements OnInit  {

incomeTaxes:IncomeTax[];

constructor(private incomeTaxService:IncomeTaxService){}

ngOnInit(){
        this.incomeTaxService.getIncomeTaxs().subscribe(response => this.incomeTaxes = response,error => console.log(error));
}


	
}