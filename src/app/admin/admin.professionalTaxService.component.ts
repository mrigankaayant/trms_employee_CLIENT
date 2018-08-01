import {Injectable,OnInit} from '@angular/core';
import {Http, Response,Headers, RequestOptions,RequestOptionsArgs} from '@angular/http';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ProfessionalTax } from './model/ProfessionalTax.model';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ProfessionalTaxService{

    baseUrl:string;
 
   constructor(private http: HttpService){
   }

  getProfessionalTaxs(){
      return this.http.get('/professionalTaxs').map(res => res.json().reverse());
  }


} 