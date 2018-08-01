import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TabMenuModule,MenuItem} from 'primeng/primeng';
import {LoaderService} from './util/loader.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/employee.home.html' 
})
export class EmployeeHomeComponent {
    constructor(private router: Router,private route: ActivatedRoute,private loader:LoaderService) {
       
    }

    showRecruitmentDashboard(){
       this.router.navigate(['/recruitment']);
    }

    showAccountDashboard(){
       this.router.navigate(['/account']);
    }

    showHRDashboard(){
       this.router.navigate(['/hr']);
    }

    showSalesDashboard(){
       this.router.navigate(['/sales']);
    }

    showAdminDashboard(){
       this.router.navigate(['/admin']);
    }

    showTrainingDashboard(){
       this.router.navigate(['/training']);
    }

}