import { StateOfCountry } from './stateOfCountry.model';

export class ProfessionalTax{

     id:number;
	 stateOfCountryMst:StateOfCountry;
	 upperLimitAmount:number;
	 lowerLimitAmount:number;
	 taxAmount:number;
	 isActive:boolean;
	 createdDate:Date;
	 isDeleted:boolean;

}


