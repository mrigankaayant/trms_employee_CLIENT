import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class StateService {
    options: RequestOptionsArgs;
    form: string;
    to: string;
    baseUrl: string;

    constructor(private http: HttpService) {
   }

    getStateList() {
        return this.http.get('/states').map(response => response.json());
    }


    getStateListByCountryId(id:number) {
        return this.http.get('/country/'+id+'/states').map(response => response.json());; 
    }

}