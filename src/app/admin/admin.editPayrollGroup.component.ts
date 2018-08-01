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
    selector: 'editPayrollGroups',
    templateUrl: 'app/admin/editPayrollGroup.html'
})
export class PayrollGroupEditComponent implements OnInit {

    formPayrollGroup: FormGroup;
    formPayrollCompForm: FormGroup;
    formPayrollDeductionCompForm: FormGroup;
    payrollGroupMst: PayrollGroupModel;
    payrollGroupReadOnlySelector:boolean = true;
    payrollGroupEditButtonSelector:boolean = false;
    payrollCompsList:PayrollComp[];
    payrollComEarningList:PayrollComp[];
    payrollComDeductionList:PayrollComp[];
    selectedEarningComponent:PayrollComp[];
    selectedDeductionComponent:PayrollComp[];
    employeeList:Employee[];
    selectedEmployee:Employee[];
    selectedEmployeeLazyList:Employee[];
    payrollEarningForDropDown:PayrollComp[];
    payrollComponentList: SelectItem[];
    display: boolean = false;
    payrollComponentEarning:PayrollComp;
    payrollComponentDeduction:PayrollComp;
    payrollGroupMstId:number;
    msgs: Message[] = [];
    deduction: boolean = false;
    employeeDialog:boolean = false;
    employeeListforLazy:Employee[];
    totalRecord: number;

    constructor(private payrollGroupService: PayrollGroupService,private employeeService:EmployeeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.payrollGroupMstId = this.route.snapshot.params["id"];
        this.payrollCompsList = [];
        this.payrollComEarningList = [];
        this.payrollComDeductionList = [];

        this.formPayrollGroup = this.formBuilder.group({
            'groupName': '',
            'description': '',
            'id':''
        });

         this.formPayrollCompForm = this.formBuilder.group({
            'compValue': '',
            'remarks': '',
            'payrollCompMst': this.formBuilder.group({
                'id': ''
            })
        });

        this.formPayrollDeductionCompForm = this.formBuilder.group({
            'compValue': '',
            'remarks': '',
            'payrollCompMst': this.formBuilder.group({
                'id': ''
            })
        });

        this.payrollGroupService.getPayrollGroupById(this.payrollGroupMstId).subscribe(
            data => {
                this.payrollGroupMst = new PayrollGroupModel();
                this.payrollGroupMst = data;
                this.formPayrollGroup.patchValue(this.payrollGroupMst);
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


    editAllow(){
        this.payrollGroupReadOnlySelector = false;
        this.payrollGroupEditButtonSelector = true;
    }

    cancel(){
       console.log('this is cancel method');
       this.formPayrollGroup.patchValue(this.payrollGroupMst);
       this.payrollGroupReadOnlySelector = true;
       this.payrollGroupEditButtonSelector = false;
    }

    updatePayrollGroupMst(){
      this.payrollGroupEditButtonSelector = false;
      this.payrollGroupReadOnlySelector = true;
      console.log("update");
      this.payrollGroupService.updatePayrollGroupMst(this.formPayrollGroup.value).subscribe(
            data => {
                this.payrollGroupMst = data;
                this.formPayrollGroup.patchValue(this.payrollGroupMst);
                this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Group Successfully Updated' });
            },
            err => {
                console.log("ERROR: " + err);
                this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Group Not Updated' });
            },
            () => { console.log('Authentication Complete') }
        );

      
    }


    addPayrollCompEarning(){
        this.payrollComponentList=[];
        this.display = true;
        let id:number = 1;
        this.payrollGroupService.getPayrollGroupEarningList(id).subscribe(
        data => {
                    this.payrollEarningForDropDown = data;
                    this.payrollComponentList.push({ label: 'Select Earning Component', value: 'null' });
                    for (var i = 0; i < this.payrollEarningForDropDown.length; i++) {
                    this.payrollComponentList.push({
                    label: this.payrollEarningForDropDown[i].payrollCompMst.name,
                    value: this.payrollEarningForDropDown[i].payrollCompMst.id
                });
               }
                },
                err => {
                    console.log("ERROR: "+err);
                },
                () => { console.log('Authentication Complete') }

            );
    }

     addPayrollCompDeduction(){
        this.payrollComponentList=[];
        this.deduction = true;
        let id:number = 1;
        this.payrollGroupService.getPayrollGroupDeductionList(id).subscribe(
        data => {
                    this.payrollEarningForDropDown = data;
                    this.payrollComponentList.push({ label: 'Select Earning Component', value: 'null' });
                    for (var i = 0; i < this.payrollEarningForDropDown.length; i++) {
                    this.payrollComponentList.push({
                    label: this.payrollEarningForDropDown[i].payrollCompMst.name,
                    value: this.payrollEarningForDropDown[i].payrollCompMst.id
                });
               }
                },
                err => {
                    console.log("ERROR: "+err);
                },
                () => { console.log('Authentication Complete') }

            );
    }

    savePayrollEarning(){
        this.msgs = [];
        this.payrollComEarningList = [];
        this.display = false;
        this.payrollComponentEarning = this.formPayrollCompForm.value;
        this.payrollComponentEarning.payrollGroupMst = new PayrollGroupModel();
        this.payrollComponentEarning.payrollGroupMst.id=this.payrollGroupMstId;
        this.payrollComponentEarning.id = new PayrollCompId();
        this.payrollComponentEarning.id.payrollComMstId = this.payrollComponentEarning.payrollCompMst.id;
        this.payrollComponentEarning.id.payrollGroupMstId = this.payrollGroupMstId;

        this.payrollGroupService.insertPayrollCom(this.payrollComponentEarning).subscribe(
        data => {
                this.formPayrollCompForm.reset();
              this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Earning Successfully Added' });
        },
        err => {
                       console.log('ERROE :'+ err);
                       this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Added' });
        },
        () => { 
            console.log('Authentication Complete');
            this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId,"Earning").subscribe(
            data => {
                this.payrollComEarningList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        ); 
    
            }
        );


    }


    savePayrollDeduction(){
        this.msgs = [];
        this.payrollComDeductionList = [];
        this.deduction = false;
        this.payrollComponentDeduction = this.formPayrollDeductionCompForm.value;
        this.payrollComponentDeduction.payrollGroupMst = new PayrollGroupModel();
        this.payrollComponentDeduction.payrollGroupMst.id=this.payrollGroupMstId;
        this.payrollComponentDeduction.id = new PayrollCompId();
        this.payrollComponentDeduction.id.payrollComMstId = this.payrollComponentDeduction.payrollCompMst.id;
        this.payrollComponentDeduction.id.payrollGroupMstId = this.payrollGroupMstId;

        this.payrollGroupService.insertPayrollCom(this.payrollComponentDeduction).subscribe(
        data => {
                this.formPayrollDeductionCompForm.reset();
              this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Payroll Earning Successfully Added' });
        },
        err => {
                       console.log('ERROE :'+ err);
                       this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Added' });
        },
        () => { 
            console.log('Authentication Complete');
            this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId,"Deduction").subscribe(
            data => {
                this.payrollComDeductionList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        ); 
    
            }
        );


    }



    removePayrollCompEarning(){
          this.msgs = [];
          
          this.payrollComEarningList = [];
         var id:number;
          if(this.selectedEarningComponent == null){
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Selected' });
          }else{
             console.log(this.selectedEarningComponent);
             for (var i = 0; i < this.selectedEarningComponent.length; i++) {
                //id = this.selectedEarningComponent[i].payrollCompMst.id;
                //console.log("CompID"+id);
                this.payrollComEarningList.splice(i);
                this.payrollGroupService.deletePayrollEarningById(this.selectedEarningComponent[i].payrollCompMst.id,this.selectedEarningComponent[i].payrollGroupMst.id).subscribe(
            data => {
               
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { 
            this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId,"Earning").subscribe(
            data => {
                this.payrollComEarningList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        );  }
        );
			} 
          }

          
    }

     removePayrollCompDeduction(){
          this.msgs = [];
          this.payrollComDeductionList = [];
         var id:number;
          if(this.selectedDeductionComponent == null){
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Payroll Earning Not Selected' });
          }else{
             console.log(this.selectedDeductionComponent);
             for (var i = 0; i < this.selectedDeductionComponent.length; i++) {
                //id = this.selectedEarningComponent[i].payrollCompMst.id;
                //console.log("CompID"+id);
                this.payrollGroupService.deletePayrollEarningById(this.selectedDeductionComponent[i].payrollCompMst.id,this.selectedDeductionComponent[i].payrollGroupMst.id).subscribe(
            data => {
               
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { 
             
            this.payrollGroupService.getPayrollComsByPayrollGroupId(this.payrollGroupMstId,"Deduction").subscribe(
            data => {
                this.payrollComDeductionList = data;
            },
            err => {
                console.log("ERROR: " + err);
            },
            () => { console.log('Authentication Complete') }
        );  }
        );
			} 
          }

          
    }

 LazyLoadCandidate(event: LazyLoadEvent) {
      console.log(event)
      this.employeeService.getLazyEmployees(event).subscribe(
       response=> {this.employeeListforLazy=response.data;
         this.totalRecord=response.totalRecord;
           console.log("Total Record:"+response.totalRecord);
        }
      )
    }

    addEmployee(event: LazyLoadEvent){
        this.employeeDialog = true;
      this.employeeService.getLazyEmployees(event).subscribe(
       response=> {this.employeeListforLazy=response.data;
         this.totalRecord=response.totalRecord;
           console.log("Total Record:"+response.totalRecord);
        }
      )
    }

    saveEmployee(){
        console.log(this.selectedEmployeeLazyList);
         this.employeeList = [];
         for (let emp of this.selectedEmployeeLazyList) {
                    emp.payrollGroupMst = this.payrollGroupMst;
                }
         this.employeeService.updateEmployees(this.selectedEmployeeLazyList).subscribe(
            data => {
                this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Employee Successfully Saved' });
            },
            err => {
                console.log(err.json().message)
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Employee Successfully Not Saved' });
            },
            () => { 
                console.log('Authentication Complete');
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

        ); 
    }

    }

