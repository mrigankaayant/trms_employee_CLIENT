import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SelectItem, Message, LazyLoadEvent, TabViewModule, SplitButtonModule, MenuItem,TabMenuModule } from 'primeng/primeng';


@Component({

	selector: 'menu',
	templateUrl: 'app/hr/menu.html'
})
export class MenuComponent implements OnInit {

	items: MenuItem[];

	ngOnInit() {}
       

}