import { Action } from '@ngrx/store';
import {PatientActions, PatientActionTypes} from '../actions/patient.actions';


export interface DoctorState {
  selectedDoctorId: number;
  Doctor: any[];
  error: string;
  pageNum: number;

}

export const initialState: DoctorState = {
  selectedDoctorId: 0,
  Doctor: [],
  error: '',
  pageNum: 1
};

export function reducer(state = initialState, action: PatientActions): DoctorState {
  switch (action.type) {

    case PatientActionTypes.GetSuccess:
      return {
        ...state,
        Doctor: action.payload,
        error: ''
      };

    case PatientActionTypes.GetFail:
      return {
        ...state,
        Doctor: [],
        error: action.payload
      };

    case PatientActionTypes.CurrentDoctor:
      return {
        ...state,
        selectedDoctorId: action.payload.doctorId
      };
      case PatientActionTypes.ClearDoctor:
      return {
        ...state,
        selectedDoctorId: 0,
        Doctor: [],
        error: '',
        pageNum : 1
      };
    case PatientActionTypes.SetPageNo:
      return {
        ...state,
        pageNum : action.payload
      };
    default:
      return state;
  }
}
