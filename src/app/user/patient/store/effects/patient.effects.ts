import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PatientService} from '../../services/patient.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import { PatientActionTypes} from '../actions/patient.actions';
import * as PatientActions from '../actions/patient.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';


@Injectable()
export class PatientEffects {

  constructor(private patientService: PatientService,
              private actions$: Actions) {}


  @Effect()
  getMusic$: Observable<Object> = this.actions$.pipe(
    ofType(PatientActionTypes.GetDoctor),
    // tap((action: PatientActions.GetDoctor) => {
    //   console.log('search val: ', action.payload);})
    map((action: PatientActions.GetDoctor) => {
      console.log('search val: ', action.payload);
      return action.payload; }),
    mergeMap((value: object) =>

      this.patientService.getDoctor(value).pipe(
        map(data => (new PatientActions.GetSuccess(data))),
        catchError(err => of(new PatientActions.GetFail(err)))
      )

    ));
}
