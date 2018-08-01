import { CityModel } from "./city.model";
import { CountryModel } from './country.model';
import { PayrollGroupModel } from './payrollGroup.model';
import { StateModel } from './state.model';
import { StateOfCountry } from './stateOfCountry.model';

export class Employee{
    id:number;
	cityMstByWorkingCity:CityModel;
	cityMstByCityMstId:CityModel;
	countryMst:CountryModel;
	payrollGroupMst:PayrollGroupModel;
	stateMst:StateModel;
	employeeCode:string;
    firstName:string;
	lastName:string;
	gender:string;
	dob:Date;
	qualification:string;
	fathersName:string;
	mothersName:string;
    houseNo:string;
	street:string;
    zipCode:number;
	phoneNo:string;
	mobileNo:string;
	email:string;
	bankAccountNo:string;
	bankAccountType:string;
	bankName:string;
	bankBranchName:string;
	bankBranchAddress:string;
	bankIfsCode:string;
	bankMicrCode:string;
	panNumber:string;
	isActive:boolean;
	createdDate:Date;
	isDeleted:boolean;
	deperment:string;
	designation:string;
	monthlySalary:number;

}