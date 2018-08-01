import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TabMenuModule,MenuItem} from 'primeng/primeng';
import {LoaderService} from './util/loader.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HomeService } from './home.service';
import { UserMst } from '../app/model/user.mst.model';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/home.html'
})
export class HomeComponent implements OnInit{
    show:boolean;
    userMst:UserMst;
    constructor(private router: Router,private route: ActivatedRoute,private loader:LoaderService,private homeService:HomeService) {
        
    }

    ngOnInit(){
          this.show = true;
          this.homeService.getUserType().subscribe(
         data => {
			        this.userMst = data;	
                    
         },
         err => {
                console.log(err);
         },
        () => { 
            if(this.userMst.userType == 'Candidate'){
                console.log("Enter");
                this.router.navigate(['/candidate']);
                
            }
            if(this.userMst.userType == 'Employee'){
                this.router.navigate(['/employeeHomeComponent']);
            }
          
            this.show = false;
		}
        );
    }

}