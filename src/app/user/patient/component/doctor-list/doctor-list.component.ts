import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  @Input() doctors;
  @Input() errorMessage: string;
  @Input() selectedDoctor: any;
  @Input() page: number;
  @Output() selected = new EventEmitter<any>();
  @Output() setPage = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  doctorSelected(d) {
    this.selected.emit(d);
  }
}
