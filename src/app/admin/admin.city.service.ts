import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class CityService {
    options: RequestOptionsArgs;
    form: string;
    to: string;
    baseUrl: string;

    constructor(private http: HttpService) {
   }

    getCityList() {
        return this.http.get('/cities').map(response => response.json());
    }


    getCityListByStateId(id:number) {
        return this.http.get('/state/'+id+'/cities').map(response => response.json()); 
    }
}