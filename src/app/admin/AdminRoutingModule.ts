import { NgModule }      from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEmployeeComponent} from './admin.addEmployee.component';
import { ShowEmployeeComponent } from './admin.showEmployeeDetails.component';
import { ListEmployeeComponent } from './admin.listEmployee.component';
import { ProfessionalTaxComponent } from './admin.professional.component';
import { TaxPayerGroupComponent } from './admin.taxpayergroup.component';
import { EditEmployeeComponent } from './admin.editEmployeeComponent';
import { IncomeTaxComponent } from './admin.incomeTaxListComponent';
import { PayrollGroupAddComponent } from './admin.payrollGroupAddComponent';
import { PayrollGroupListComponent } from './admin.payrollGroupList.component';
import { PayrollGroupEditComponent } from './admin.editPayrollGroup.component';
import { PayrollGroupViewComponent } from './admin.payrollGroupView.component';

const router:Routes=[
    {path:'',component:AdminComponent},
    {path:'addEmployee',component:AddEmployeeComponent},
    {path:'listEmployee',component:ListEmployeeComponent},
    {path:'professionalTaxList',component:ProfessionalTaxComponent},
    {path:'taxPayerGroupList',component:TaxPayerGroupComponent},
    {path:'showEmployeeDetails/:id',component:ShowEmployeeComponent},
    {path:'employeeDetails/:id',component:EditEmployeeComponent},
    {path:'incomeTaxList',component:IncomeTaxComponent},
    {path:'addPayrollGroup',component:PayrollGroupAddComponent},
    {path:'payrollGroupList',component:PayrollGroupListComponent},
    {path:'payrollDetails/:id',component:PayrollGroupEditComponent},
    {path:'payrollGroupView/:id',component:PayrollGroupViewComponent},
      
    ];




  @NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})


export class AdminRoutingModule{}