import { Component, OnInit, ViewChild } from '@angular/core';
import{AccountService} from './account.service';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';
import { UserMst } from '../model/user.mst.model';

@Component({

	selector: 'menu',
	templateUrl: 'app/account/menu.html'
})
export class MenuComponent implements OnInit {

items: MenuItem[];
activeItem: MenuItem;
userMst:UserMst;
candidateId:string;

constructor(private accountService:AccountService) {
	  
	}

ngOnInit() {
			this.items = [
            {label: 'Candidate List', icon: 'fa fa-plus',routerLink: ['/account/paidcandidate']},
            {label: 'Incentive', icon: 'fa-users',routerLink: ['/account/inecentive']},
			{label: 'Log Out',icon: 'fa-sign-out',routerLink: ['/account/logout']}
        ];
		

}	

}


