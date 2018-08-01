import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent} from 'primeng/primeng';
import { Employee } from './model/employee.model';
import { URLSearchParams } from '@angular/http';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class EmployeeService {
    options: RequestOptionsArgs;
    form: string;
    to: string;
    baseUrl: string;
    

    constructor(private http: HttpService) {

  }


    addEmployee(employee: Employee):Observable<Employee> {
        return this.http.post('/employee', employee, this.options).map(response => {return response.json()});
    }

    getLazyEmployees(event: LazyLoadEvent){

       return this.http.post('/employees/lazySearchData',event).map(response => response.json());

    }

     viewEmployeeDetailsById(id :number) {
       return this.http.get('/employee/'+id).map(response => {return response.json()});  
    }

    updateEmployee(employee:Employee){
        return this.http.put('/employee', employee, this.options).map(response => {return response.json()});
    } 

    updateEmployees(employees:Employee[]){
         return this.http.post('/employees', employees, this.options).map(response => {return response.json()});
    }

    getTaxPayerGroups(){
      return this.http.get('/taxPayerGroups').map(response => response.json());
  }

   getEmployeeListByPayrollGroupId(id:number){
         return this.http.get('/employeeListByPayrollGroupId/'+id).map(response => {return response.json()}); 
    }

}