import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.models"

@Injectable()
export class EmployeeServices{

    private listofEmployees: Employee[]=[
        {
            id : 1,
            name :'mahesh',
            contactPreference :'Email',
            gender:'Male',
            email :'mahesh@gmail.com',
            phoneNumber:34343434,
            dateofBirth : new Date('10/12/2010'),
            department: 'IT',
            isActive :true,
            photoPath :'assets/images/image1.jpg'
       
          },
          {
           id : 2,
           name :'kumar',
           contactPreference :'Email',
           gender:'Male',
           email :'kumar@gmail.com',
           phoneNumber:34343434,
           dateofBirth : new Date('10/12/2009'),
           department: 'IT',
           isActive : true,
           photoPath :'assets/images/image2.jpg'
       
          },
          {
           id : 3,
           name :"kiran",
           contactPreference :"Email",
           gender:"Male",
           email :"kiran@gmail.com",
           phoneNumber:34343434,
           dateofBirth : new Date('11/04/2011'),
           department: 'IT',
           isActive :true,
           photoPath :'assets/images/image3.jpg'
       
          },
    ];
      getEmployees(): Employee[]{
          return this.listofEmployees;
      }

      save(employee : Employee){
          this.listofEmployees.push(employee);
      }
}
