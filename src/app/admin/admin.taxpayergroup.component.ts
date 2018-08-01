import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaxPayerGroupService } from './admin.taxPayerGroup.service';
import { TaxPayerGroup } from './model/taxPayerGroup.model';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';


@Component({

	selector: 'taxPayerGroupList',
	templateUrl: 'app/admin/taxPayerGroupList.html'
})
export class TaxPayerGroupComponent implements OnInit  {

taxPayerGroups:TaxPayerGroup[];

constructor(private taxPayerGroupService:TaxPayerGroupService){}

ngOnInit(){
        this.taxPayerGroupService.getTaxPayerGroups().subscribe(response => this.taxPayerGroups = response,error => console.log(error));
}


	
}