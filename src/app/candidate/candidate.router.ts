import { NgModule }      from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration.component';
import { RegistrationDetails} from './candidate.showRegistration.component';
import { EnrollmentComponent} from './candidate.enrollment.component';
import { PaymentComponent} from './candidate.payment.component';
import { SuccessComponent} from './candidate.success.component';
import { LogOutComponent} from './candidate.logout.component';



const router:Routes=[
        {  path:'',redirectTo:'registration',pathMatch:'full'},
        {  path:'registration',component:RegistrationComponent },
        {  path:'showRegistrationDetails/:id',component: RegistrationDetails},
        {  path:'enrollment/:id',component: EnrollmentComponent},
        {  path:'makePayment/:id',component: PaymentComponent},
        {  path:'successComponent',component: SuccessComponent},
        {  path:'logout',component: LogOutComponent},
];

  @NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})


export class CandidateRoutingModule{

}