import { NgModule }      from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcingComponent} from './resourcing.list.component';
import { CandidateFollowUpComponent} from './resourcing.addfollowup.component';
import { ShowCandidateFollowUpDetails } from './resourcing.showCandodateFollowUpDetails.component';
import { ResourcingEditCandidateComponent } from './resourcing.editCandidate.component';
import { SearchCandidateComponent } from './resourcing.searchCandidate.component';
import { FreePoolComponent } from './resourcing.freepool.component';
import { EditFreepoolCandidateComponent } from './resourcing.freepool.candidate.edit.component';
import { AddCandidateComponent } from './resorcung.addnewCandidateComponent';
import { CallHistoryComponent } from './resourcing.call.history.component'; 
import { IncentiveListComponent } from './incentive.list.component';
import { EmployeeIncentive } from './employee.incentive.calculation.component';

const router:Routes=[
        {  path:'',redirectTo:'listCandidate',pathMatch:'full'},
        {  path:'listCandidate',component:ResourcingComponent},
        {  path:'showFollowUpDetails/:id',component: CandidateFollowUpComponent},
        {  path:'showCandidateFollowupDetails/:id',component:ShowCandidateFollowUpDetails},
        {  path:'editCandidate/:id',component:ResourcingEditCandidateComponent},
        {  path:'searchCandidate',component:SearchCandidateComponent},
        {  path:'freepoolcandidate',component:FreePoolComponent},
        {  path:'editFreepoolCandidate/:id',component:EditFreepoolCandidateComponent},
        {  path:'addCandidate',component:AddCandidateComponent},
        {  path:'callHistory',component:CallHistoryComponent},
        {  path:'incentiveList',component:IncentiveListComponent},
        {  path:'incentive',component:EmployeeIncentive}
        
];

  @NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})


export class ResourcingRoutingModule{}