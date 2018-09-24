import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
import { RouterModule , Routes} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeServices } from './employees/employee.service';

  const appRoutes : Routes = [
       {path : 'list' , component : ListEmployeesComponent},
       {path : 'create' , component : CreateEmployeeComponent},
       {
         path : '',redirectTo :'/list' , pathMatch : 'full'
       }
  ];

  
  
@NgModule({  
  declarations: [  
    AppComponent, ListEmployeesComponent, CreateEmployeeComponent,
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)  
  ],  
  providers: [EmployeeServices],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  