import {Injectable,OnInit} from '@angular/core';
import {Http, Response,Headers, RequestOptions,RequestOptionsArgs} from '@angular/http';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { IncomeTax } from './model/incomeTax.model';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class IncomeTaxService{

    baseUrl:string;
 
   constructor(private http: HttpService){
   }

  getIncomeTaxs(){
      return this.http.get('/incomeTaxs').map(res => res.json().reverse());
  }


} 