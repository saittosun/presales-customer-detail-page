import { take } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { LeadFacade } from '../leads/lead-store/lead.facade';

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
