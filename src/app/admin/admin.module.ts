import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEmployeeComponent } from './admin.addEmployee.component';
import { PayrollGroupViewComponent } from './admin.payrollGroupView.component';
import { IncomeTaxComponent } from './admin.incomeTaxListComponent';
import { EditEmployeeComponent } from './admin.editEmployeeComponent';
import { PayrollGroupEditComponent } from './admin.editPayrollGroup.component';
import { ShowEmployeeComponent } from './admin.showEmployeeDetails.component';
import { ListEmployeeComponent } from './admin.listEmployee.component';
import { PayrollGroupListComponent } from './admin.payrollGroupList.component';
import { ProfessionalTaxComponent } from './admin.professional.component';
import { MenuComponent } from './admin.menu.component';
import { AdminRoutingModule } from './AdminRoutingModule';
import { ProfessionalTaxService } from './admin.professionalTaxService.component';
import{PayrollGroupAddComponent} from './admin.payrollGroupAddComponent';
import { TaxPayerGroupComponent } from './admin.taxpayergroup.component';
import { TaxPayerGroupService } from './admin.taxPayerGroup.service';
import { EmployeeService } from './admin.employee.service';
import { PayrollGroupService } from './admin.payrollgroupService';
import { CountryService } from './admin.country.service';
import { StateService } from './admin.state.service';
import { CityService } from './admin.city.service'; 
import { HttpService } from '../util/http.service';
import{IncomeTaxService} from './admin.incomeTax.service';


import {
  InputTextModule, ButtonModule, InputMaskModule, RadioButtonModule, CalendarModule, FileUploadModule,
  PanelModule, FieldsetModule, DropdownModule, SelectItem, CheckboxModule, InputTextareaModule,
  DataTableModule, SharedModule, LazyLoadEvent, MenubarModule, MenuItem, TabMenuModule, AutoCompleteModule, TabViewModule,
  Message, SplitButtonModule,DialogModule
} from 'primeng/primeng';

@NgModule({
  imports: [FormsModule, InputTextModule, ButtonModule, PanelModule,DialogModule,
    InputMaskModule, RadioButtonModule, CalendarModule,
    PanelModule, FieldsetModule, DropdownModule, CheckboxModule, InputTextareaModule,
    FileUploadModule, MenubarModule, TabMenuModule,
    DataTableModule, SharedModule, HttpModule, ReactiveFormsModule, AutoCompleteModule, TabViewModule,
    SplitButtonModule, CommonModule,AdminRoutingModule
  ],
  declarations: [AdminComponent,AddEmployeeComponent,PayrollGroupAddComponent,ShowEmployeeComponent,EditEmployeeComponent,IncomeTaxComponent,
                ListEmployeeComponent,MenuComponent,ProfessionalTaxComponent,TaxPayerGroupComponent,PayrollGroupListComponent,
                PayrollGroupEditComponent,PayrollGroupViewComponent],
  providers: [ProfessionalTaxService,HttpService,TaxPayerGroupService,EmployeeService,PayrollGroupService,CountryService,StateService,CityService,IncomeTaxService],


})
export class AdminModule { }


