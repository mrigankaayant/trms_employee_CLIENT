import { PayrollGroupModel } from './payrollGroup.model';
import { PayrollCompMst } from './payrollCompMst.model';
import { PayrollCompId } from './payrollCompId.model';
 
export class PayrollComp{
    id:PayrollCompId;
	payrollCompMst:PayrollCompMst;
	payrollGroupMst:PayrollGroupModel;
	compValue:number;
	createdDate:Date;
    remarks:string;
}