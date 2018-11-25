import { Action } from '@ngrx/store';

export enum DoctorActionTypes {
  LoadDoctors = '[Doctor] Load Doctors'
}

export class LoadDoctors implements Action {
  readonly type = DoctorActionTypes.LoadDoctors;
}

export type DoctorActions = LoadDoctors;
