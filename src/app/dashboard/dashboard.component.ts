import { CustomerFacade } from './../app-store/customer-state/customer.facade';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers: Customer[];
  filter: string = '';

  constructor(private store: CustomerFacade) { }

  ngOnInit(): void {
    this.store.getCustomers();
    console.log(this.customers);
    // this.store.loadCustomers();
    // this.customers = this.store.allLeads$;
  }

  searchThis(val: string): void {
    this.filter = val;
  }

  ngOnDestroy(): void {}

}
