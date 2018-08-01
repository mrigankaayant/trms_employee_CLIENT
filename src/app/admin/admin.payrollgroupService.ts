import {Injectable,OnInit} from '@angular/core';
import {Http, Response,Headers, RequestOptions,RequestOptionsArgs} from '@angular/http';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { PayrollGroupModel } from './model/payrollGroup.model';
import { Employee } from './model/employee.model';
import { PayrollComp } from './model/payrollComp.model';
import { HttpService } from '../util/http.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class PayrollGroupService{
    options: RequestOptionsArgs;
    form: string;
    to: string;
    baseUrl: string;

 
   constructor(private http: HttpService) {
  }

  getPayrollGroupList(){
      return this.http.get('/payrollGroups').map(response => response.json());
  }


  getPayrollGroupById(id:number){
      console.log(id);
    return this.http.get('/payrollGroup/'+id).map(response => {return response.json()});  
  }

  getPayrollGroupEarningList(defaultPayrollGroupId:number){
      return this.http.get('/payrollgroup/'+defaultPayrollGroupId+'/payrollEarningComps').map(res => res.json().reverse());
  }

  getPayrollGroupDeductionList(defaultPayrollGroupId:number){
     return this.http.get('/payrollgroup/'+defaultPayrollGroupId+'/payrollDeductions').map(res => res.json().reverse());
  }

 addPayrollGroupMst(payrollGroupModel:PayrollGroupModel):Observable<PayrollGroupModel> {
        return this.http.post('/payrollGroup', payrollGroupModel, this.options).map(response => {return response.json()});
   }

   updatePayrollGroupMst(payrollGroupModel:PayrollGroupModel):Observable<PayrollGroupModel> {
        return this.http.put('/payrollGroupUpdate', payrollGroupModel, this.options).map(response => {return response.json()});
   }


addPayrollComponents(payrollComps:PayrollComp[]){
     return this.http.post('/payrollComps', payrollComps, this.options).map(response => {return response.json()});
 } 


getPayrollComsByPayrollGroupId(id:number,type:string){
   return this.http.get('/payrollCompsListByPayrollGroupId/'+id+'/'+type).map(response => {return response.json()}); 
}

insertPayrollCom(payrollComp:PayrollComp){
   return this.http.post('/payrollComp',payrollComp, this.options).map(response => {return response.json()});
}


getPayrollEarningById(id:number){
    return this.http.get('/payrollEarning/'+id).map(response => {return response.json()}); 
}

deletePayrollEarningById(compId:number,groupId:number){
    return this.http.get('/payrollEarningDelete/'+compId+'/'+groupId).map(response => {return response.json()}); 
}
addEmployee(employee: Employee):Observable<Employee> {
        return this.http.post('/employee', employee, this.options).map(response => {return response.json()});
    }

}