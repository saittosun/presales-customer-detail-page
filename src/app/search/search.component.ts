import { takeUntil } from 'rxjs/operators';
import { SearchService } from './../core/services/search.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  searchfilter: FormControl;
  private destroyed$ = new Subject<boolean>();

  constructor(private searchService: SearchService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchfilter = this.fb.control(null);
    this.searchfilter.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => {
        this.searchService.changeList(value)
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}


