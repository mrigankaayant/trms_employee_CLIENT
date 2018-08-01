import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpService } from '../util/http.service';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AddCandidate } from '../model/add.candidate.model';
import { FollowupCandidateInfo } from '../model/followUp.candidate.info.model'
import { UpdateFollowup } from '../model/update.followup.model';
import { FollowUp } from '../model/folloup.model';
import { CandidateSearch } from '../model/candidate.search.model';
import { Candidate } from '../model/candidate.model'

@Injectable()
export class ResourcingService {
  options: RequestOptionsArgs;

  constructor(private http: HttpService, private nativeHttp: Http) {

  }
  getCandidateDetails() {
    return this.http.get('/resourcing/candidates').map(response => response.json());
  }

addCandidate(addCandidate: AddCandidate):Observable<AddCandidate> {
        console.log(this.addCandidate);
        return this.http.post('/recruiting/candidate',addCandidate,this.options).map(response => {return response.json()});
}

findCandidateById(id:string){
  return this.http.get('/recruiting/candidate/'+id).map(response => {return response.json()});
}

addFollowup(updateFollowup:UpdateFollowup):Observable<FollowUp> {
        return this.http.post('/recruiting/followup',updateFollowup,this.options).map(response => {return response.json()});
}


findCandidateByIdForshow(id:string){
  return this.http.get('/recruiting/view/candidate/'+id).map(response => {return response.json()});
}

findFollowUpListById(id:string){
  return this.http.get('/recruiting/followUps/'+id).map(response => {return response.json()});
}

getCandidatesList(){
return this.http.get('/recruiting/candidates').map(response => response.json());
}

getSearchCandidate(candidateSearch: CandidateSearch):Observable<Candidate[]> {
        return this.http.post('/recruiting/searchCandidate',candidateSearch,this.options).map(response => {return response.json()});
}

findCandidateByIdForUpdate(id:string){
  return this.http.get('/recruiting/update/candidate/'+id).map(response => {return response.json()});
}

updateCandidate(addCandidate: AddCandidate):Observable<Candidate> {
        return this.http.post('/recruiting/update/candidate',addCandidate,this.options).map(response => {return response.json()});
}

checkEmail(email:string,id:string){
 return this.http.get('/recruiting/checkEmail/'+email+'/'+id).map(response => {return response.json()})
}

checkMobile(mobile:string,id:string){
  return this.http.get('/recruiting/checkMobile/'+mobile+'/'+id).map(response => {return response.json()})
}


findFreePoolCandidates(){
 return this.http.get('/recruiting/freepool/candidates').map(response => {return response.json()});
}

addFollowupForFreepool(updateFollowup:UpdateFollowup):Observable<FollowUp> {
        return this.http.post('/recruiting/freepool/followup',updateFollowup,this.options).map(response => {return response.json()});
}

findPhoneCallsById(id:string){
 return this.http.get('/phonecalls/'+id).map(response => {return response.json()});
}

findCallHistory(){
    return this.http.get('/phonelogs').map(response => {return response.json()});
}

findIncentiveList(typeFor:string){
    return this.http.get('/incentiveList/'+typeFor).map(response => {return response.json()});
}

updateFollowupForFreepool(updateFollowup:UpdateFollowup):Observable<Candidate> {
        return this.http.post('/freepool/update/followup',updateFollowup,this.options).map(response => {return response.json()});
}

enrollmentSend(id:string){
  return this.http.get('/sendEnrollmentForm/'+id).map(response => {return response.json()});
}

paymentDetails(candidateId:string){
  return this.http.get('/paymentList/'+candidateId).map(response => {return response.json()});
}

ownPayment(){
  return this.http.get('/owncandidatepayment').map(response => {return response.json()});
}

teamPayment(){
  return this.http.get('/teamcandidatepayment').map(response => {return response.json()});
}

ownPaymentByMonthYear(month:string,year:string){
  return this.http.get('/owncandidatepayment/'+month+'/'+year).map(response => {return response.json()});
}

teamPaymentByMonthYear(month:string,year:string){
  return this.http.get('/teamcandidatepayment/'+month+'/'+year).map(response => {return response.json()});
}

}
