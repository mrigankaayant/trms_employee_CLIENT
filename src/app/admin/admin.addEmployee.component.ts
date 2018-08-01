import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';
import { Employee } from './model/employee.model';
import { PayrollGroupModel } from './model/payrollGroup.model';
import { CountryModel } from './model/country.model';
import { StateModel } from './model/state.model';
import { CityModel } from './model/city.model';
import { EmployeeService } from './admin.employee.service';
import { PayrollGroupService } from './admin.payrollgroupService'; 
import { CountryService } from './admin.country.service';
import { StateService } from './admin.state.service';
import { CityService } from './admin.city.service';

@Component({

	selector: 'admin',
	templateUrl: 'app/admin/addEmployee.html'
})
export class AddEmployeeComponent implements OnInit  {

	formEmployee: FormGroup;
    dualificationList: SelectItem[];
    departmentList: SelectItem[];
    designationList: SelectItem[];
    accountList: SelectItem[];
    msgs: Message[] = [];
    employee: Employee = new Employee();
    payrollGroupMst:PayrollGroupModel = new PayrollGroupModel();
    payrollGroups: PayrollGroupModel[];
    payrollGroupList: SelectItem[];
    countries: CountryModel[];
    countriesList: SelectItem[];
    states: StateModel[];
    stateList: SelectItem[];
    cities: CityModel[];
    cityList: SelectItem[];
    idn:number;
   
    constructor(private employeeService: EmployeeService, private payrollGroupService: PayrollGroupService, private router: Router,
        private formBuilder: FormBuilder, private countryService: CountryService, private stateService: StateService,
        private cityService: CityService) { }

    ngOnInit() {
        this.dualificationList = [];
        this.dualificationList.push({ label: 'Select Qualification', value: 'null' });
        this.dualificationList.push({ label: 'MCA', value: 'MCA' });
        this.dualificationList.push({ label: 'M.Tech', value: 'M.Tech' });
        this.dualificationList.push({ label: 'B.Tech', value: 'B.Tech' });

        this.departmentList = [];
        this.departmentList.push({ label: 'Select Department', value: 'null' });
        this.departmentList.push({ label: 'Software', value: 'Software' });
        this.departmentList.push({ label: 'Recruitment', value: 'Recruitment' });
        this.departmentList.push({ label: 'Sales', value: 'Sales' });
        this.departmentList.push({ label: 'Account', value: 'Account' });
        this.departmentList.push({ label: 'HR', value: 'HR' });

        this.designationList = [];
        this.designationList.push({ label: 'Select Designation', value: 'null' });
        this.designationList.push({ label: 'Developer', value: 'Developer' });
        this.designationList.push({ label: 'Recruiter', value: 'Recruiter' });
        this.designationList.push({ label: 'Sales', value: 'Sales' });
        this.designationList.push({ label: 'Accountant', value: 'Accountant' });
        this.designationList.push({ label: 'HR', value: 'HR' });

        this.accountList = [];
        this.accountList.push({ label: 'Select Account Type', value: 'null' });
        this.accountList.push({ label: 'Saving', value: 'Saving' });
        this.accountList.push({ label: 'Current', value: 'Current' });

        this.payrollGroupList = [];
        this.payrollGroupService.getPayrollGroupList().subscribe(Response => {
            this.payrollGroups = Response;
            this.payrollGroupList.push({ label: 'Select Payroll Group', value: 'null' });
            for (var i = 0; i < this.payrollGroups.length; i++) {
                this.payrollGroupList.push({
                    label: this.payrollGroups[i].groupName,
                    value: this.payrollGroups[i].id,
                });
            }
        })


        this.countriesList = [];
        this.countryService.getCountryList().subscribe(Response => {
            this.countries = Response;
            this.countriesList.push({ label: 'Select Country', value: 'null' });
            for (var i = 0; i < this.countries.length; i++) {
                this.countriesList.push({
                    label: this.countries[i].name,
                    value: this.countries[i].id
                });
            }
        })



        this.stateList = [];
        this.stateList.push({ label: 'Select State', value: 'null' });


        this.cityList = [];
        this.cityList.push({ label: 'Select City', value: 'null' });


        this.formEmployee = this.formBuilder.group({
            'firstName': '',
            'lastName': '',
            'gender': '',
            'dob': '',
            'fathersName': '',
            'mothersName': '',
            'qualification': '',
            'deperment': '',
            'designation': '',
            'employeeCode': '',
            'monthlySalary': '',
            'houseNo': '',
            'street': '',
            'zipCode': '',
            'phoneNo': '',
            'mobileNo': '',
            'email': '',
            'bankName': '',
            'bankAccountNo': '',
            'bankAccountType': '',
            'bankBranchName': '',
            'bankBranchAddress': '',
            'bankIfsCode': '',
            'bankMicrCode': '',
            'panNumber': '',
            'payrollGroupMst': this.formBuilder.group({
                'id': ''
            }),
            'countryMst': this.formBuilder.group({
                'id': ''
            }),
            'stateMst': this.formBuilder.group({
                'id': ''
            }),
            'cityMstByWorkingCity': this.formBuilder.group({
                'id': ''
            }),
            'cityMstByCityMstId': this.formBuilder.group({
                'id': ''
            })
        });
    }



    onChangeCountryList(event: any) {
        this.stateList = [];
        let id: number = event.value;

        if (id > 0) {
            this.stateService.getStateListByCountryId(event.value).subscribe(Response => {
                this.states = Response;
                this.stateList.push({ label: 'Select State', value: 'null' });
                for (var i = 0; i < this.states.length; i++) {
                    this.stateList.push({
                        label: this.states[i].stateName,
                        value: this.states[i].id
                    });
                }
            })
        } else {
            this.stateList.push({ label: 'Select State', value: 'null' });
        }
    }


    onChangeStateList(event: any) {
        this.cityList = [];
        let id: number = event.value;
        if (id > 0) {
                this.cityService.getCityListByStateId(event.value).subscribe(Response => {
                this.cities = Response;
                this.cityList.push({ label: 'Select City', value: 'null' });
                for (var i = 0; i < this.cities.length; i++) {
                    this.cityList.push({
                        label: this.cities[i].cityName,
                        value: this.cities[i].id
                    });
                }
            })
        } else {
            this.cityList.push({ label: 'Select City', value: 'null' });
        }
    }


    addEmployee() {
        this.msgs = [];
        var id :number;
        this.employeeService.addEmployee(this.formEmployee.value).subscribe(
            data => {
                this.employee = data;
                id = data.id;
                this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Employee Successfully Saved' });
               
            },
            err => {
                console.log(err.json().message)
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Employee Successfully Not Saved' });
            },
            () => { 
                 this.router.navigate(['admin/showEmployeeDetails',id]);
                console.log('Authentication Complete') 
                    }

        ); 
    }

}