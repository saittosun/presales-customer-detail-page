import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomerFacade } from '../app-store/customer-state/customer.facade';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  customers: Customer[];

  constructor(private store: CustomerFacade) { }

  ngOnInit(): void {
    this.store.getCustomers();
    // this.store.allLeads$.pipe(take(1)).subscribe(customers => this.customers = customers);
  }

  ngOnDestroy(): void {}

}
