
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem, LazyLoadEvent, DialogModule, InplaceModule, } from 'primeng/primeng';
import { PayrollGroupService } from './admin.payrollgroupService';
import { EmployeeService } from './admin.employee.service';
import { PayrollGroupModel } from './model/payrollGroup.model';
import { PayrollComp } from './model/payrollComp.model';
import { Employee } from './model/employee.model';
import { PayrollCompId } from './model/payrollCompId.model';


@Component({
    selector: 'addPayrollGroups',
    templateUrl: 'app/admin/addPayrollGroup.html'
})
export class PayrollGroupAddComponent implements OnInit {

    payrollGroupSelector: boolean = false;
    payrollComEarningSelector: boolean = true;
    payrollComDeductionSelector : boolean = true;
    employeeListSelector: boolean = true;
    payrollGroupId: number = 0;

    //for payroll group add
    formPayrollGroup: FormGroup;
    payrollGroupMst: PayrollGroupModel;


    //for template 
    formTemplate: FormGroup;
    payrollGroups: PayrollGroupModel[];
    payrollgroupList: SelectItem[];
    payrollComEarningList: PayrollComp[];
    payrollComDeductionList: PayrollComp[];

    //for payroll comp earning add
    formPayrollCompEarning: FormGroup;
    selectedEarnings: PayrollComp[] = [];
    selectedEarningComponent: PayrollComp[];


    //for payroll comp deduction add
    formPayrollCompDeduction: FormGroup;
    selectedDeductionComponent: PayrollComp[];

    //for employee add list
    employeeList: Employee[];
    totalRecord: number;
    selectedEmployeeList: Employee[];


    constructor(private payrollGroupService: PayrollGroupService, private employeeService: EmployeeService,
        private formBuilder: FormBuilder, private router: Router) { }


    ngOnInit() {
        this.formPayrollGroup = this.formBuilder.group({
            'groupName': '',
            'description': ''
        });

        this.formTemplate = this.formBuilder.group({
            'id': ''
        });

    }


    goToAddEarning() {

        this.payrollgroupList = [];
        var id:number = 1;
        this.payrollGroupService.getPayrollGroupEarningList(id).subscribe(Response => {
            this.payrollComEarningList = Response;
        });

        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = false;
    }


     backToPayrollGroup() {
        this.payrollGroupSelector = false;
        this.payrollComEarningSelector = true;
    }

    goToAddDeduction(){
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = true;
        this.payrollComDeductionSelector = false;
        var id:number = 1;
        this.payrollGroupService.getPayrollGroupDeductionList(id).subscribe(Response => {
            this.payrollComDeductionList = Response;
        });
    }


    backToEarningCom(){
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = false;
        this.payrollComDeductionSelector = true;
        this.employeeListSelector = true;
    }


    goToAddEmployee(){
          this.payrollGroupSelector = true;
          this.payrollComEarningSelector = true;
          this.payrollComDeductionSelector = true;
          this.employeeListSelector = false;
    }


 LazyLoadCandidate(event: LazyLoadEvent) {
        this.employeeService.getLazyEmployees(event).subscribe(
            response => {
                this.employeeList = response.data;
                this.totalRecord = response.totalRecord;
            }
        )
    }


    backToDeductionComp(){
        this.payrollGroupSelector = true;
        this.payrollComEarningSelector = true;
        this.payrollComDeductionSelector = false;
        this.employeeListSelector = true;
    }



    createPayrollGroup(){
            
           var id:number;
            this.payrollGroupService.addPayrollGroupMst(this.formPayrollGroup.value).subscribe(
            data => {
                this.payrollGroupMst = data;
                id= data.id;
                console.log("Data Id"+data.id);
                 console.log("Normal Id"+id);
                for (let p of this.selectedEarningComponent) {
                   p.payrollGroupMst = this.payrollGroupMst;
                   p.id = new PayrollCompId();
                   p.id.payrollComMstId = p.payrollCompMst.id;
                   p.id.payrollGroupMstId = this.payrollGroupMst.id;
                }

                this.payrollGroupService.addPayrollComponents(this.selectedEarningComponent).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                       console.log('ERROE :'+ err);
                    },
                    () => { console.log('Authentication Complete') }
                );   

                for (let p of this.selectedDeductionComponent) {
                   p.payrollGroupMst = this.payrollGroupMst;
                   p.id = new PayrollCompId();
                   p.id.payrollComMstId = p.payrollCompMst.id;
                   p.id.payrollGroupMstId = this.payrollGroupMst.id;
                }

                 this.payrollGroupService.addPayrollComponents(this.selectedDeductionComponent).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log(err.json().message)
                    },
                    () => { console.log('Authentication Complete') }
                );   

                console.log(this.selectedEmployeeList);

                 for (let emp of this.selectedEmployeeList) {
                    emp.payrollGroupMst = this.payrollGroupMst;
                }

               this.employeeService.updateEmployees(this.selectedEmployeeList).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log('ERROR: '+err);
                    },
                    () => { console.log('Authentication Complete');
                    console.log("Current"+id);
            this.router.navigate(['admin/payrollGroupView',id]); 
                }
                );

            },
            err => {
                console.log(err.json().message)
            },
            () => { console.log('Authentication Complete');
            
        }
        );
        
        //this.router.navigate(['admin/payrollGroupList']);
        //this.router.navigate(['admin/payrollGroupView',id]);


    }



    


   



































    goToEmployeeList() {
        this.payrollComEarningSelector = true;
        this.payrollComEarningSelector = true;
        this.employeeListSelector = false;
    }

   


    backTemplatePanel() {
        this.payrollComEarningSelector = false;
        this.payrollComEarningSelector = false;
        this.employeeListSelector = true;
    }

    goToPayrollGroupListPanel() {

        this.payrollGroupService.addPayrollGroupMst(this.formPayrollGroup.value).subscribe(
            data => {
                this.payrollGroupMst = data;

                for (let p of this.selectedEarningComponent) {
                   p.payrollGroupMst = this.payrollGroupMst;
                   p.id = new PayrollCompId();
                   p.id.payrollComMstId = p.payrollCompMst.id;
                   p.id.payrollGroupMstId = this.payrollGroupMst.id;
                }

                this.payrollGroupService.addPayrollComponents(this.selectedEarningComponent).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                       console.log('ERROE :'+ err);
                    },
                    () => { console.log('Authentication Complete') }
                );   

                for (let p of this.selectedDeductionComponent) {
                   p.payrollGroupMst = this.payrollGroupMst;
                   p.id = new PayrollCompId();
                   p.id.payrollComMstId = p.payrollCompMst.id;
                   p.id.payrollGroupMstId = this.payrollGroupMst.id;
                }

                 this.payrollGroupService.addPayrollComponents(this.selectedDeductionComponent).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log(err.json().message)
                    },
                    () => { console.log('Authentication Complete') }
                );   

                console.log(this.selectedEmployeeList);

                 for (let emp of this.selectedEmployeeList) {
                    emp.payrollGroupMst = this.payrollGroupMst;
                }

               this.employeeService.updateEmployees(this.selectedEmployeeList).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log('ERROR: '+err);
                    },
                    () => { console.log('Authentication Complete') }
                );

            },
            err => {
                console.log(err.json().message)
            },
            () => { console.log('Authentication Complete') }
        );

        this.router.navigate(['admin/payrollGroupList']);

    }



    getPayrollGroupId(event: any) {
        let id: number = event.value;
        if (id > 0) {
            this.payrollGroupService.getPayrollGroupEarningList(event.value).subscribe(
                data => {
                    this.payrollComEarningList = data;

                    this.selectedEarningComponent = [];

                    for (let e of this.payrollComEarningList) {
                        if (e.payrollCompMst.isMandatory > 0) {
                            this.selectedEarningComponent.push(e);
                        }
                    }
                },
                err => {
                    console.log(err.json().message)
                },
                () => { console.log('Authentication Complete') }

            );

            this.payrollGroupService.getPayrollGroupDeductionList(event.value).subscribe(
                data => {
                    this.payrollComDeductionList = data;

                    this.selectedDeductionComponent = [];

                    for (let e of this.payrollComDeductionList) {
                        if (e.payrollCompMst.isMandatory > 0) {
                            this.selectedDeductionComponent.push(e);
                        }
                    }

                },
                err => {
                    console.log(err.json().message)
                },
                () => { console.log('Authentication Complete') }

            );

            this.payrollComEarningSelector = false;

        } else {

            this.payrollComEarningSelector = true;
        }

    }




}
