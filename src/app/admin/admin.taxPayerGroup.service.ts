import {Injectable,OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { TaxPayerGroup } from './model/taxPayerGroup.model';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class TaxPayerGroupService{

    options: RequestOptionsArgs;
    form: string;
    to: string;
    baseUrl: string;
 
   constructor(private http: HttpService){
       
   }

  getTaxPayerGroups(){
       return this.http.get('/taxPayerGroups').map(response => response.json());
  }


}