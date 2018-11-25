import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  getDoctor(location: string, speciality: string) {
    this.search.emit({location: location, speciality: speciality});
  }

}
