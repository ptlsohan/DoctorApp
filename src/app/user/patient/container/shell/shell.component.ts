import { Component, OnInit } from '@angular/core';
import * as PatientActions from '../../store/actions/patient.actions';
import * as fromPatient from '../../store/index';
import * as fromRoot from '../../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Doctor} from '../../models/Doctor';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  selectedDoctor$: Observable<any>;
  doctor$: Observable<Doctor[]>;
  errorMessage$: Observable<string>;
  num$: Observable<number>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.doctor$ = this.store.pipe(select(fromPatient.getDoctor));
    this.errorMessage$ = this.store.pipe(select(fromPatient.getError));
    this.selectedDoctor$ = this.store.pipe(select(fromPatient.getSelectedDoctor));
    this.num$ = this.store.pipe(select(fromPatient.getPage));
  }

  searchDoctor(value: object): void {
    console.log(value);
    this.store.dispatch(new PatientActions.GetDoctor(value));
  }

  doctorSelected(value: any) {
    console.log('doctor id in shell', value);
    this.store.dispatch(new PatientActions.CurrentDoctor(value));
  }
}
