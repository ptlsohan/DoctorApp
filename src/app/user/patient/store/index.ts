import * as fromPatient from './reducers/patient.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getPatientFeatureState = createFeatureSelector<fromPatient.DoctorState>('patient');

export const getDoctor = createSelector(
  getPatientFeatureState,
  state => state.Doctor
);
export const getDoctorId = createSelector(
  getPatientFeatureState,
  state => state.selectedDoctorId
);
export const getError = createSelector(
  getPatientFeatureState,
  state => state.error
);

export const getSelectedDoctor = createSelector(
  getPatientFeatureState,
  getDoctorId,
  (state, selectedDoctorId ) => {
    return selectedDoctorId ? state.Doctor.find(x => (x.doctorId ) === selectedDoctorId) : null;
  }
);


export const getPage = createSelector(
  getPatientFeatureState,
  state => state.pageNum
);
export const getDetail = createSelector(
  getPatientFeatureState,
  state => state.Doctor.filter(x => x)
);
