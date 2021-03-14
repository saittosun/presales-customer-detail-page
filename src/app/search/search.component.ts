import { takeUntil } from 'rxjs/operators';
import { SearchService } from './../core/services/search.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchComponent,
      multi: true
    }
  ]
})

export class SearchComponent implements OnInit, OnDestroy {
  searchCriteria = '';
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis(event) {
    console.log(event);
    this.searchcriteria.emit(event);
  }
  // isDisabled: boolean = false;
  // searchfilter = new FormControl(null);

  // private onChange: (value: string) => void;
  // private destroyed$ = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
    // this.searchfilter.valueChanges
    // .pipe(takeUntil(this.destroyed$))
    // .subscribe(value => {
    //   this.onChange(value);
    // });
  }

  ngOnDestroy(): void {
    // this.destroyed$.next(true);
    // this.destroyed$.complete();
  }

  // public writeValue(value: string): void {
  //   this.searchfilter.setValue(value, { emitEvent: false });
  // }

  // public registerOnChange(onChange: (value: string) => void) {
  //   this.onChange = onChange;
  // }

  // public registerOnTouched() {}

  // public setDisabledState(isDisabled: boolean) {
  //   this.isDisabled = isDisabled;
  // }
}


