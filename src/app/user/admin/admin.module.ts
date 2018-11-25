import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './component/edit-doctor/edit-doctor.component';
import { RequestComponent } from './container/request/request.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddDoctorComponent, EditDoctorComponent, RequestComponent]
})
export class AdminModule { }
