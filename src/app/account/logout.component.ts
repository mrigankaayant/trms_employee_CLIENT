import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';





@Component({

	templateUrl: '/app/account/logout.html',
	
})

export class LogOutComponent {
	
	showloader:boolean;

	constructor(private router: Router,private route: ActivatedRoute) {
        console.log("Enter");
       this.showloader = true;
      
	}

    ngOnInit(){
       sessionStorage.clear();
       this.router.navigate(['login']);
        }
    

	
}