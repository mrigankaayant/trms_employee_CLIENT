import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account.router';
import { HttpService } from '../util/http.service';
import { MenuComponent} from './menu.component';
import { DropdownService } from '../util/dropdown.service';
import {AccountService} from './account.service';
import {PaidCandidateComponent} from './paid.candidate.component';
import { IncenTiveComponent } from './incentive.component';
import {LogOutComponent} from './logout.component';

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
    SplitButtonModule, CommonModule,ChartModule,ConfirmDialogModule,ContextMenuModule,SidebarModule,AccountRoutingModule
  ],
  declarations: [MenuComponent,PaidCandidateComponent,IncenTiveComponent,LogOutComponent],
  providers: [HttpService,DropdownService,AccountService]


})
export class AccountModule { 
  

}