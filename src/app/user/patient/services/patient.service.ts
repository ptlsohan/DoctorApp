import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private getDoctorUrl = 'http://localhost:9000/doctor-service/doctors' ;
  constructor(private http: HttpClient) { }

  getDoctor(value: object) {
    const url = `${this.getDoctorUrl}?speciality=${value.speciality}&location=${value.location}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url,{headers: headers}).pipe(
      tap(data =>  console.log(data)),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
