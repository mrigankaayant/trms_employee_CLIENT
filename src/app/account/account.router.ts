import { NgModule }      from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaidCandidateComponent } from './paid.candidate.component';
import { IncenTiveComponent } from './incentive.component';
import { LogOutComponent } from './logout.component';

const router:Routes=[
        {  path:'',redirectTo:'paidcandidate',pathMatch:'full'},
        {  path:'paidcandidate',component:PaidCandidateComponent },
        {  path:'inecentive',component:IncenTiveComponent },
        {  path:'logout',component:LogOutComponent }
];

  @NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})


export class AccountRoutingModule{

}