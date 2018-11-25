import { Action } from '@ngrx/store';

export enum PatientActionTypes {
  LoadPatients = '[Patient] Load Patients',
  GetDoctor = 'GetDoctor',
  GetSuccess = 'GetSuccess',
  GetFail = 'GetFail',
  CurrentDoctor = 'Current Doctor',
  ClearDoctor = 'Clear Doctor',
  SetPageNo = 'Set Page Num',
  GetDetail = 'Get Detail'
}

export class LoadPatients implements Action {
  readonly type = PatientActionTypes.LoadPatients;
}

export class GetDoctor implements Action {
  readonly type = PatientActionTypes.GetDoctor;
  constructor(public payload: object) { }
}
export class CurrentDoctor implements Action {
  readonly type = PatientActionTypes.CurrentDoctor;
  constructor(public payload: any) { }
}
export class GetSuccess implements Action {
  readonly type = PatientActionTypes.GetSuccess;

  constructor(public payload) { }
}


export class GetFail implements Action {
  readonly type = PatientActionTypes.GetFail;

  constructor(public payload) { }
}

export class ClearDoctor implements Action {
  readonly type = PatientActionTypes.ClearDoctor;


}
export class SetPageNo implements Action {
  readonly type = PatientActionTypes.SetPageNo;
  constructor(public payload: number) { }
}

export class GetDetail implements Action {
  readonly type = PatientActionTypes.GetDetail;

  constructor(public payload) { }
}

export type PatientActions = LoadPatients | GetDoctor | GetSuccess | GetFail | CurrentDoctor
  | ClearDoctor | SetPageNo | GetDetail;
