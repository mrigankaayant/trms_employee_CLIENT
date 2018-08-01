import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem,LazyLoadEvent } from 'primeng/primeng';
import { PayrollGroupService } from './admin.payrollgroupService';
import { PayrollGroupModel } from './model/payrollGroup.model';

@Component({
    selector: 'addPayrollGroups',
    templateUrl: 'app/admin/listPayrollGroup.html'
})
export class PayrollGroupListComponent implements OnInit {

    payrollGroups:PayrollGroupModel[];
    selectedPayrollgroup:PayrollGroupModel;

    constructor(private payrollGroupService:PayrollGroupService,private router: Router){}

   ngOnInit(){
        this.payrollGroupService.getPayrollGroupList().subscribe(response => this.payrollGroups = response,error => console.log(error));
    }

    onRowSelect(event:any) {
         this.router.navigate(['/admin/payrollDetails',this.selectedPayrollgroup.id]);
    }

}