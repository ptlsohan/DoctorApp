import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { ScheduleListComponent } from './component/schedule-list/schedule-list.component';
import { DoctorProfileComponent } from './component/doctor-profile/doctor-profile.component';
import { LeaveRequestComponent } from './container/leave-request/leave-request.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScheduleComponent, ScheduleListComponent, DoctorProfileComponent, LeaveRequestComponent]
})
export class DoctorModule { }
