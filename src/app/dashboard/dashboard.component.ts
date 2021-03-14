import { FormControl } from '@angular/forms';
// import { takeUntil } from 'rxjs/operators';
// import { ApiService } from '../core/services/api.service';
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Customer } from '../models/customer';
// import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit, OnDestroy {
//   customers: Customer[] = [];
//   private destroyed$ = new Subject<boolean>();

//   constructor(private apiService: ApiService) { }

//   ngOnInit(): void {
//     this.apiService.customersSub
//       .pipe(takeUntil(this.destroyed$))
//       .subscribe(response => {
//       this.customers = response;
//     })
//   }

//   ngOnDestroy(): void {
//     this.destroyed$.next(true);
//     this.destroyed$.complete();
//   }

// }


import { filter, take, takeUntil } from 'rxjs/operators';
import { ApiService } from '../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LeadFacade } from '../leads/lead-state/lead.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers: Customer[];
  filteredCustomers: Customer[];

  constructor(private store: LeadFacade) { }

  ngOnInit(): void {
    this.store.loadCustomers();
    this.store.allLeads$.pipe(take(1)).subscribe(customers => this.customers = customers);
    this.filteredCustomers = [...this.customers]
  }


  searchThis(val: string): void {
    if (val === null || val === '') {
      this.filteredCustomers = [...this.customers]
      return;
    }
    this.filteredCustomers = [...this.customers.filter(customer => {
      return customer.customerName.toLowerCase().includes(val.toLowerCase()) || customer.projectName.toLowerCase().includes(val.toLowerCase())
    })]
  }

  ngOnDestroy(): void {}

}
