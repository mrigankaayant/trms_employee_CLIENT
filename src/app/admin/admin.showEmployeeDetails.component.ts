import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';
import { EmployeeService } from './admin.employee.service';
import { Employee } from './model/employee.model';
import { PayrollGroupModel } from './model/payrollGroup.model';
import { CountryModel } from './model/country.model';
import { StateModel } from './model/state.model';
import { CityModel } from './model/city.model';

@Component({

	selector: 'admin',
	templateUrl: 'app/admin/employeeDetails.html'
})
export class ShowEmployeeComponent implements OnInit {

    employee: Employee ;

    constructor(private employeeService:EmployeeService,private router: Router,private route: ActivatedRoute){}

    ngOnInit(){
       this.employee = new Employee();
       this.employee.payrollGroupMst = new PayrollGroupModel();
       this.employee.countryMst = new CountryModel();
       this.employee.stateMst = new StateModel();
       this.employee.cityMstByCityMstId = new CityModel();
       this.employee.cityMstByWorkingCity = new CityModel();

       this.employeeService.viewEmployeeDetailsById(this.route.snapshot.params["id"]).subscribe(
            data => {
                this.employee = data;
                console.log("====================");
                console.log(this.employee);
                console.log("===================");
            },
            err => {
                console.log(err.json().message);
            },
            () => { console.log('Authentication Complete') }
        ); 
    }
}