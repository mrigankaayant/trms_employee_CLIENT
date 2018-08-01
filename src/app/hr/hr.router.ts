import { NgModule }      from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrComponent} from './hr.component';

//import {EditCandidateComponent} from './resourcing.editCandidate.component'
const router:Routes=[
        {  path:'',
           redirectTo:'newCandidate',
           pathMatch:'full'},
       
       
        {   path:'newCandidate',
            component:HrComponent 
        },
  
       


];

  @NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})


export class HrRoutingModule{}