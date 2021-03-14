import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  searchCriteria = '';
  @Output() searchcriteria = new EventEmitter<String>();

  constructor() { }

  searchThis(event) {
    console.log(event);
    this.searchcriteria.emit(event);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void { }

}


