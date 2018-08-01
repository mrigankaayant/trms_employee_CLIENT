import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';


@Component({

	selector: 'menu',
	templateUrl: 'app/admin/menu.html'
})
export class MenuComponent implements OnInit {

	items: MenuItem[];

	ngOnInit() {
        this.items = [
            {
                label: 'Company',
				icon: 'fa fa-th',
                items: [{
                        label: 'Employee', 
                        icon: 'fa fa-user',
                        items: [
                            {label: 'Add',icon: 'fa-plus', routerLink: ['/admin/addEmployee']},
                            {label: 'List',icon: 'fa-align-justify', routerLink: ['/admin/listEmployee']}
                        ]
                    },
					{
                        label: 'Payroll Group', 
                        icon: 'fa fa-users',
                        items: [
                            {label: 'Add',icon: 'fa-plus',routerLink: ['/admin/addPayrollGroup']},
                            {label: 'List',icon: 'fa-align-justify',routerLink:['/admin/payrollGroupList']}
                        ]
                    }
                ]
            },
			{
                label: 'Declaration',
                icon: 'fa fa-hand-o-up',
                items: [
                    {label: 'HRA Declaration', icon: 'fa fa-hand-o-right'},
                    {label: 'TAX Declaration', icon: 'fa fa-hand-o-right'}
                ]
            },
			{
                label: 'Tax',
                icon: 'fa fa-inr',
                items: [
                    {label: 'Professional Tax',icon: 'fa fa-paper-plane', routerLink: ['/admin/professionalTaxList']},
                    {label: 'Tax Payer Group', icon: 'fa fa-paper-plane', routerLink: ['/admin/taxPayerGroupList']},
					{label: 'Income Tax', icon: 'fa fa-paper-plane', routerLink: ['/admin/incomeTaxList']},
					{label: 'Icome Tax Exemption', icon: 'fa fa-paper-plane', routerLink: ['/admin/incomeTaxExemptionList']}
                ]
            },
			{
                label: 'Payslip',
                icon: 'fa fa-file-pdf-o',
                items: [
                    {label: 'Generate', icon: 'fa fa-history'}
                ]
            },
			{
                label: 'Report',
                icon: 'fa fa-bar-chart',
                items: [
                    {label: 'Monthly', icon: 'fa fa-calendar'}
                ]
            }
        ];
    }

}