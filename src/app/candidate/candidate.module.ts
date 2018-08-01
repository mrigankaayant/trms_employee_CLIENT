import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CandidateRoutingModule } from './candidate.router';
import { RegistrationComponent } from './registration.component';
import { HttpService } from '../util/http.service';
import { MenuComponent} from './menu.component';
import { DropdownService } from '../util/dropdown.service';
import {CandidateService} from './candidate.service';
import { RegistrationDetails } from './candidate.showRegistration.component';
import { EnrollmentComponent} from './candidate.enrollment.component';
import { PaymentComponent} from './candidate.payment.component';
import { SuccessComponent} from './candidate.success.component';
import { LogOutComponent} from './candidate.logout.component';

import {
   EditorModule,InputTextModule, ButtonModule, InputMaskModule, RadioButtonModule, CalendarModule, FileUploadModule,
  PanelModule, FieldsetModule, DropdownModule, SelectItem, CheckboxModule, InputTextareaModule,DialogModule,
  DataTableModule, SharedModule, LazyLoadEvent, MenubarModule, MenuItem, TabMenuModule, AutoCompleteModule, TabViewModule,
  Message, SplitButtonModule,ConfirmDialogModule,ConfirmationService,ChartModule,ContextMenuModule,SidebarModule,MultiSelectModule
} from 'primeng/primeng';

@NgModule({
  imports: [EditorModule,FormsModule, InputTextModule, ButtonModule, PanelModule,DialogModule,MultiSelectModule,
    InputMaskModule, RadioButtonModule, CalendarModule,
    PanelModule, FieldsetModule, DropdownModule, CheckboxModule, InputTextareaModule,
    FileUploadModule, MenubarModule, TabMenuModule,
    DataTableModule, SharedModule, HttpModule, ReactiveFormsModule, AutoCompleteModule, TabViewModule,
    SplitButtonModule, CommonModule,ChartModule,ConfirmDialogModule,ContextMenuModule,SidebarModule,CandidateRoutingModule
  ],
  declarations: [LogOutComponent,RegistrationComponent,MenuComponent,RegistrationDetails,EnrollmentComponent,PaymentComponent,SuccessComponent],
  providers: [HttpService,DropdownService,CandidateService]


})
export class CandidateModule { 
  

}