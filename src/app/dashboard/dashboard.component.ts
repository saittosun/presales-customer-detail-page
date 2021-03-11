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


import { takeUntil } from 'rxjs/operators';
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
  customers: Observable<Customer[]>;

  constructor(private store: LeadFacade,
              private router: Router) { }

  ngOnInit(): void {
    this.store.loadCustomers();
    this.customers = this.store.allLeads$;
  }

  onLeadDetail() {
    this.router.navigate(['/new/customer-detail'])
  }

  ngOnDestroy(): void {}

}
