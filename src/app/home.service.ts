import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpService } from './util/http.service';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {
  options: RequestOptionsArgs;

  constructor(private http: HttpService, private nativeHttp: Http) {

  }
  getUserType() { 
    return this.http.get('/findUserType').map(response => response.json());
  }

}
