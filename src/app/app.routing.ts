import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home.componet';
import { AuthGuard } from './auth/auth.guard.service';
import { EmployeeHomeComponent } from './employee.home.component';

const router: Routes = [ 
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'employeeHomeComponent', component: EmployeeHomeComponent, canActivate: [AuthGuard]},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthGuard]},
    { path: 'recruitment', loadChildren: 'app/recruitment/resourcing.module#ResourceModule', canActivate: [AuthGuard]},
    { path: 'hr', loadChildren: 'app/hr/hr.module#HrModule', canActivate: [AuthGuard]},
    { path: 'candidate', loadChildren: 'app/candidate/candidate.module#CandidateModule', canActivate: [AuthGuard]},
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule', canActivate: [AuthGuard]}
    
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    providers:[AuthGuard],
    exports: [RouterModule]
})

export class AppRoutingModule { }                   