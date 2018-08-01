import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, LazyLoadEvent,Message } from 'primeng/primeng';
import { PayrollGroupService } from './admin.payrollgroupService';
import { EmployeeService } from './admin.employee.service';
import { PayrollGroupModel } from './model/payrollGroup.model';
import { PayrollComp } from './model/payrollComp.model';
import { Employee } from './model/employee.model';
import { PayrollCompId } from './model/payrollCompId.model';

@Component({
    selector: 'viewPayrollGroup',
    templateUrl: 'app/admin/viewPayrollGroup.html'
})

export class PayrollGroupViewComponent implements OnInit {
    formPayrollGroup: FormGroup;
    formPayrollCompForm: FormGroup;
    payrollGroupMst: PayrollGroupModel;
    payrollGroupReadOnlySelector:boolean = true;
    payrollGroupEditButtonSelector:boolean = false;
    payrollCompsList:PayrollComp[];
    payrollComEarningList:PayrollComp[];
    payrollComDeductionList:PayrollComp[];
    selectedEarningComponent:PayrollComp;
    selectedDeductionComponent:PayrollComp;
    employeeList:Employee[];
    selectedEmployee:Employee;
    payrollEarningForDropDown:PayrollComp[];
    payrollComponentList: SelectItem[];
    display: boolean = false;
    payrollComponentEarning:PayrollComp;
    payrollGroupMstId:number;
    msgs: Message[] = [];

    constructor(private payrollGroupService: PayrollGroupService,private employeeService:EmployeeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
     ngOnInit() {
        this.payrollGroupMstId = this.route.snapshot.params["id"];
        this.payrollCompsList = [];
        this.payrollComEarningList = [];
        this.payrollComDeductionList = [];
        this.payrollGroupMst = new PayrollGroupModel();
        

        this.payrollGroupService.getPayrollGroupById(this.payrollGroupMstId).subscribe(
            data => {
                this.payrollGroupMst = new PayrollGroupModel();
                this.payrollGroupMst = data;
              
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        );


        this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId,"Earning").subscribe(
            data => {
                this.payrollComEarningList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        );

        this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId,"Deduction").subscribe(
            data => {
                this.payrollComDeductionList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        );

        this.employeeService.getEmployeeListByPayrollGroupId(this.payrollGroupMstId).subscribe(
            data => {
                this.employeeList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        );



    }

    goToPayrollList(){
        this.router.navigate(['admin/payrollGroupList']);
    }
}