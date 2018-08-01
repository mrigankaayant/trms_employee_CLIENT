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
    selector: 'editEmployee',
    templateUrl: 'app/admin/editEmployee.html'
    
})
export class EditEmployeeComponent implements OnInit {


    formEmployee: FormGroup;
    employee: Employee = new Employee();
    msgs: Message[] = [];
    dualificationList: SelectItem[];
    departmentList: SelectItem[];
    designationList: SelectItem[];
    accountList: SelectItem[];
    payrollGroups: PayrollGroupModel[];
    payrollGroupList: SelectItem[];
    countries:CountryModel[];
    countriesList:SelectItem[];
    states:StateModel[];
    stateList:SelectItem[];
    cities:CityModel[];
    cityList:SelectItem[];
    country:CountryModel;

    constructor(private employeeService: EmployeeService,private payrollGroupService: PayrollGroupService,
        private countryService:CountryService,private stateService:StateService,
        private cityService:CityService,private router: Router, private route: ActivatedRoute,
        private fb: FormBuilder) { }

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
                    value: this.payrollGroups[i].id
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
        this.stateService.getStateList().subscribe(Response => {
            this.states = Response;
            this.stateList.push({ label: 'Select State', value: 'null' });
            for (var i = 0; i < this.states.length; i++) {
                this.stateList.push({
                    label: this.states[i].stateName,
                    value: this.states[i].id
                });
            }
        })


       this.cityList = [];
        this.cityService.getCityList().subscribe(Response => {
            this.cities = Response;
            this.cityList.push({ label: 'Select City', value: 'null' });
            for (var i = 0; i < this.cities.length; i++) {
                this.cityList.push({
                    label: this.cities[i].cityName,
                    value: this.cities[i].id
                });
            }
        })

        this.formEmployee = this.fb.group({
            'id':'',
            'firstName':'',
            'lastName':'',
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

            'payrollGroupMst': this.fb.group({
                'id':''
            }),
            'countryMst': this.fb.group({
                'id': ''
            }),
            'stateMst': this.fb.group({
                'id':''
            }),
            'cityMstByWorkingCity': this.fb.group({
                'id': ''
            }),
            'cityMstByCityMstId': this.fb.group({
                'id': ''
            })
        });


        let id = this.route.snapshot.params["id"];

        this.employeeService.viewEmployeeDetailsById(id).subscribe(
            data => {
                this.employee = new Employee();
                this.employee = data;
                if (data.dob != null) {
                this.employee.dob = new Date(data.dob);
                }
                this.formEmployee.patchValue(this.employee);
               
            },
            err => {
                console.log(err.json().message)
            },
            () => { console.log('Authentication Complete') }
        );
    }


    updateEmployee() {
        this.msgs = [];
        this.employeeService.addEmployee(this.formEmployee.value).subscribe(
            data => {
                this.employee = data;
                this.router.navigate(['admin/showEmployeeDetails',this.employee.id]);
            },
            err => {
                console.log(err.json().message)
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Employee Successfully Not Updated' });
            },
            () => { console.log('Authentication Complete') }
        );
    }


   onChangeCountryList(event: any) {
        this.stateList = [];
        let id: number = event.value;

        if (id > 0) {
            this.stateList = [];
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
            this.cityList = [];
            this.cityList.push({ label: 'Select City', value: 'null' });
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




}