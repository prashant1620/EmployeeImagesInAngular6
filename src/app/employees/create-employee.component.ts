import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.models';
import { Employee } from '../models/employee.models';
import { EmployeeServices } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto=false;
 departments : Department[]=[
     {id:1,name:'Help desk'},
     {id:2,name :'Manager'},
     {id:3 ,name : 'IT'},
     {id: 4 , name : 'Accounts'}
 ];

  constructor(private _employeeservice : EmployeeServices,private _router:Router) { }
  employee : Employee={
    id:null,
    name:null,
    contactPreference:null,
    gender:null,
    email: '',
    phoneNumber:null,
    dateofBirth:null,
    department:null,
    isActive:null,
    photoPath:null
  }

  ngOnInit() {
  }
  saveEmployee() : void{
  
    this._employeeservice.save(this.employee);
    this._router.navigate(['list']);
  }
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }
}
