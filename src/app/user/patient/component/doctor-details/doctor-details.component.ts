import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Doctor} from '../../models/Doctor';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() selectedDoctor: Doctor;

  constructor() { }

  ngOnInit() {
  }

  moreDetail(doctorId: number) {
  //  this.router.navigate(['/more-detail', doctorId]);
  }

  detailRoute(id: number) {
   // this.router.navigate(['/detail'], { queryParams: { trackId: id } });
  }
}
