
import { Role } from './role.model'

export class Employee{

    employeeId:string;
    active:Boolean;
    name:string;
    workMobile:string;
    workEmail:string;
    linkedin:string;
    userId:string;
    supervisorId:string;
    remarks:string;
    phoneExtension:string;
    roles:Role[];
     
}