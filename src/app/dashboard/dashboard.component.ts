import { Observable } from 'rxjs/internal/Observable';
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
  customers: Observable<Customer[]> ;
  filter: string = '';

  constructor(private store: LeadFacade) { }

  ngOnInit(): void {
    this.store.loadCustomers();
    this.customers = this.store.allLeads$;

  }

  searchThis(val: string): void {
    this.filter = val;
  }

  ngOnDestroy(): void {}

}
