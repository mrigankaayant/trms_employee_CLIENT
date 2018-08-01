import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {  LazyLoadEvent} from 'primeng/primeng';

import {  CandidateShow} from '../model/candidate.show.model';
import { CandidateCourse } from '../model/candidate.course.model';
import { CandidateRemarks } from '../model/candidate.remarks.model';
import { SocialMedia } from '../model/social.media.model';
import { PreferredLocation } from '../model/preferred.location.model';
import { Immigration } from '../model/candidate.imigration.model';
import { Phone } from '../model/phone.model';
import { FollowUp } from '../model/folloup.model';

import { ResourcingService } from './resourcing.service';
import { Candidate } from '../model/candidate.model';


@Component({
	selector: 'resourcingShowCandidateDetails',
	templateUrl: 'app/recruitment/showCandidateFollowupDetails.html',
    styleUrls: ['./app/recruitment/recruitment.css']
})
export class ShowCandidateFollowUpDetails implements OnInit {

	showloader:boolean;
	//candidateList: CandidateModel[]; 
	//totalRecord: number;
    //selectedCandidate: Candidate;
	candidate: CandidateShow ;
	followUps:FollowUp[];
	//candidateList: Candidate[];

	constructor(private router: Router,private route: ActivatedRoute,private resourcingService:ResourcingService) {	}

	ngOnInit() {

	this.showloader = true;

	 /*this.resourcingService.getCandidatesList().subscribe(
         response => {
			this.candidateList = response
         },
         err => {
                console.log(err.json().message)
         },
        () => { 
			 this.showloader = false;
		}
        );*/
		
      let id = this.route.snapshot.params["id"];

	  this.candidate = new CandidateShow();
      this.candidate.candidateCourses = new Array<CandidateCourse>();
      this.candidate.preferredLocations = new Array<PreferredLocation>();
	  this.candidate.immigrations = new Array<Immigration>();
      this.candidate.socialMedia = new SocialMedia();
	  this.candidate.phones = new Array<Phone>();
       

       this.resourcingService.findCandidateByIdForshow(id).subscribe(
            data => {
               
                this.candidate = data;
            },
            err => {
                console.log(err.json().message)
            },
            () => { 
                console.log('Authentication Complete');
                this.resourcingService.findFollowUpListById(id).subscribe(
            data => {
               
                this.followUps = data;
            },
            err => {
                console.log(err.json().message)
            },
            () => { 
                console.log('Authentication Complete'+this.followUps.length);
			       this.showloader = false;
				}
        );
                
            }
        );

		


	}

}