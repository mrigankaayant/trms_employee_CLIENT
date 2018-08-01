import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';
import { EmployeeService } from './admin.employee.service';
import { Employee } from './model/employee.model';

@Component({

	selector: 'admin',
	templateUrl: 'app/admin/listEmployee.html'
})
export class ListEmployeeComponent implements OnInit {

	employeeList:Employee[];
    totalRecord: number;
    selectedEmployee:Employee;

    constructor(private employeeService:EmployeeService,private router: Router){}

    ngOnInit(){
       
    }

    LazyLoadCandidate(event: LazyLoadEvent) {
      console.log(event)
      this.employeeService.getLazyEmployees(event).subscribe(
       response=> {this.employeeList=response.data;
         this.totalRecord=response.totalRecord;
           console.log("Total Record:"+response.totalRecord);
        }
      )
    }
	onRowSelect(event:any) {
         this.router.navigate(['admin/employeeDetails',this.selectedEmployee.id]);
    }
}