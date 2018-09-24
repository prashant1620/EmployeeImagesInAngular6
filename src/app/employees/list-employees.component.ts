import { Component, OnInit } from '@angular/core';
import  { Employee } from '../models/employee.models';
import { EmployeeServices } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
 
  employees : Employee[] ;
  constructor(private _employeeservice: EmployeeServices) { }

  ngOnInit() {
    this.employees=this._employeeservice.getEmployees();
  }


}
