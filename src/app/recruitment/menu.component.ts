import { Component, OnInit, ViewChild } from '@angular/core';

import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

	selector: 'menu',
	templateUrl: 'app/recruitment/menu.html'
})
export class MenuComponent implements OnInit {
/*
	items: MenuItem[];

	ngOnInit() {}

	constructor(private router: Router) {	}
       
	searchFrom(){
		this.router.navigate(['recruitment/searchCandidate']);
	}

	newCandidateFrom(){
		this.router.navigate(['recruitment/newCandidate']);
	}

	freepoolCandidateFrom(){
		this.router.navigate(['recruitment/freepoolcandidate']);
	}

	addCandidateFrom(){
		this.router.navigate(['recruitment/addCandidate']);
	}

	callHistoryFrom(){
        this.router.navigate(['recruitment/callHistory']);
	}   

	*/


items: MenuItem[];


ngOnInit() {

 this.items = [
            {label: 'Add', icon: 'fa fa-plus',routerLink: ['/recruitment/addCandidate']},
            {label: 'List', icon: 'fa-list',routerLink: ['/recruitment/listCandidate']},
            {label: 'FreePool', icon: 'fa-users',routerLink: ['/recruitment/freepoolcandidate']},
            {label: 'Call History', icon: 'fa-history',routerLink: ['/recruitment/callHistory']},
            {label: 'Search', icon: 'fa-search',routerLink: ['/recruitment/searchCandidate']},
			{label: 'Incentive',icon: 'fa-inr',routerLink: ['/recruitment/incentive']},		
			{label: 'Incentive List',icon: 'fa-list-ul',routerLink: ['/recruitment/incentiveList']},
			{label: 'Log Out',icon: 'fa-sign-out',url: '../../login'}
        ];

}




}