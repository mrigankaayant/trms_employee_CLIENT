import { TaxPayerGroup } from './taxPayerGroup.model';

export class IncomeTax{
    id:number;
	taxPayerGroupMst:TaxPayerGroup;
	lowerLimitAmount:number;
	upperLimitAmount:number;
    gender:string;
	taxRate:string;
	isActive:boolean;
    createdDate:Date;
	isDeleted:boolean;
}