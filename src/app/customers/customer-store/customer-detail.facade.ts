import { getCustomers } from './customer-detail.selectors';
import { Load, LoadSuccess } from './customer-detail.actions';
import { select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from "./customer-detail.reducers";
import { CustomerDetail } from 'src/app/models/customer-detail';

@Injectable({
  providedIn: 'root'
})

export class CustomerDetailFacade {
  allCustomers$: Observable<CustomerDetail[]> = this.store.pipe(select(getCustomers))

  // allCustomers$: Observable<{customers: CustomerDetail[]}>;

  constructor(private store: Store<fromApp.CustomerDetailState>) { }
  // constructor(private store: Store<{customerDetail: {customers: CustomerDetail[]}}>) { }

  loadCustomers() {
    this.store.dispatch(new Load())
    // this.allCustomers$ = this.store.select('customerDetail')
  }

  updateCustomers(customers: CustomerDetail[]) {
    this.store.dispatch(new LoadSuccess(customers))
  }



}
