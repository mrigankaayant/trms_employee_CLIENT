import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ResourcingRoutingModule } from './resourcing.router';
import { ResourcingComponent } from './resourcing.list.component';
import { ResourcingService } from './resourcing.service';
import { HttpService } from '../util/http.service';
import { CandidateFollowUpComponent } from './resourcing.addfollowup.component';
import { MenuComponent} from './menu.component';
import { DropdownService } from '../util/dropdown.service';
import { ShowCandidateFollowUpDetails } from './resourcing.showCandodateFollowUpDetails.component';
import { ResourcingEditCandidateComponent } from './resourcing.editCandidate.component';
import { SearchCandidateComponent } from './resourcing.searchCandidate.component';
import { FreePoolComponent } from './resourcing.freepool.component';
import { EditFreepoolCandidateComponent } from './resourcing.freepool.candidate.edit.component'; 
import { AddCandidateComponent } from './resorcung.addnewCandidateComponent'; 
import { CallHistoryComponent } from './resourcing.call.history.component'; 
import { IncentiveListComponent } from './incentive.list.component';
import { EmployeeIncentive } from './employee.incentive.calculation.component';

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
    SplitButtonModule, CommonModule,ChartModule, ResourcingRoutingModule,ConfirmDialogModule,ContextMenuModule,SidebarModule
  ],
  declarations: [CallHistoryComponent,SearchCandidateComponent,
                  ResourcingEditCandidateComponent,ResourcingComponent,
                  CandidateFollowUpComponent,MenuComponent,ShowCandidateFollowUpDetails,
                  FreePoolComponent,EditFreepoolCandidateComponent,AddCandidateComponent,
                  IncentiveListComponent,EmployeeIncentive],
  providers: [ResourcingService, HttpService,ConfirmationService,DropdownService],


})
export class ResourceModule { }


