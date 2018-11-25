import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDetailsComponent } from './component/doctor-details/doctor-details.component';
import {DoctorListComponent} from './component/doctor-list/doctor-list.component';
import {SearchComponent} from './component/search/search.component';
import { ShellComponent } from './container/shell/shell.component';
import { AppointmentHistoryComponent } from './container/appointment-history/appointment-history.component';
import { UserProfileComponent } from './container/user-profile/user-profile.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './store/reducers/patient.reducer';
import {PatientEffects} from './store/effects/patient.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('patient', reducer),
    EffectsModule.forFeature(
      [PatientEffects]
    ),
  ],
  declarations: [DoctorListComponent, DoctorDetailsComponent,
    SearchComponent,
    ShellComponent,
    AppointmentHistoryComponent,
    UserProfileComponent]
})
export class PatientModule { }
