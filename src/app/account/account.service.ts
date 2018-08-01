import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpService } from '../util/http.service';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
  options: RequestOptionsArgs;

  constructor(private http: HttpService, private nativeHttp: Http) {

  }

   getUserType() { 
    return this.http.get('/findUserType').map(response => response.json());
  }

getCandidateDetailsByUserId(userId:string){
  return this.http.get('/candidate/'+userId).map(response => {return response.json()});
}

getAllPaidCandidateList(){
  console.log("HIT")
  return this.http.get('/allpaidcandidate').map(response => response.json());
}

findCandidateById(id:string){
  return this.http.get('/recruiting/view/candidate/'+id).map(response => {return response.json()});
}

paymentDetails(candidateId:string){
  return this.http.get('/paymentList/'+candidateId).map(response => {return response.json()});
}
getEmployees(){
  return this.http.get('/employees').map(response => {return response.json()});
}

ownPaymentByMonthYearEmpID(month:string,year:string,employeeId:string){
  return this.http.get('/owncandidatepayment/'+employeeId+'/'+month+'/'+year).map(response => {return response.json()});
}

teamPaymentByMonthYearrEmpID(month:string,year:string,employeeId:string){
  return this.http.get('/teamcandidatepayment/'+employeeId+'/'+month+'/'+year).map(response => {return response.json()});
}
}