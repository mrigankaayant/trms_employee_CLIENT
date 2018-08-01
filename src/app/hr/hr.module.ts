import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HrRoutingModule } from './hr.router';
import {HrComponent} from './hr.component'
import { HttpService } from '../util/http.service';
import {MenuComponent} from './menu.component';

//import { EditCandidateComponent } from './resourcing.editCandidate.component';

import {
  EditorModule,InputTextModule, ButtonModule, InputMaskModule, RadioButtonModule, CalendarModule, FileUploadModule,
  PanelModule, FieldsetModule, DropdownModule, SelectItem, CheckboxModule, InputTextareaModule,
  DataTableModule, SharedModule, LazyLoadEvent, MenubarModule, MenuItem, TabMenuModule, AutoCompleteModule, TabViewModule,
  Message, SplitButtonModule,ConfirmDialogModule,ConfirmationService,
} from 'primeng/primeng';

@NgModule({
  imports: [EditorModule,FormsModule, InputTextModule, ButtonModule, PanelModule,
    InputMaskModule, RadioButtonModule, CalendarModule,
    PanelModule, FieldsetModule, DropdownModule, CheckboxModule, InputTextareaModule,
    FileUploadModule, MenubarModule, TabMenuModule,
    DataTableModule, SharedModule, HttpModule, ReactiveFormsModule, AutoCompleteModule, TabViewModule,
    SplitButtonModule, CommonModule, HrRoutingModule,ConfirmDialogModule
  ],
  declarations: [HrComponent,MenuComponent],
  providers: [HttpService, ConfirmationService,],


})
export class HrModule { }