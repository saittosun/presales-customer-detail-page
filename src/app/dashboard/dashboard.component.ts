import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  private destroyed$ = new Subject<boolean>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.customersSub
      .pipe(takeUntil(this.destroyed$))
      .subscribe(response => {
      this.customers = response;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
