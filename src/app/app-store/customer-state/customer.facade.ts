import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Customer } from "src/app/models/customer";

import { getCustomers } from "../customer-state/customer.actions";
import {
  CUSTOMERS_ALL,
  CUSTOMERS_ERROR,
  CUSTOMERS_LOADING
} from "../customer-state/customer.selectors";
import { AppState } from "../customer-state/customer.types";

@Injectable()
export class CustomerFacade {
  constructor(private store: Store<AppState>) {}

  public selectAll(): Observable<Customer[]> {
    return this.store.pipe(select(CUSTOMERS_ALL));
  }

  public selectLoading(): Observable<boolean> {
    return this.store.pipe(select(CUSTOMERS_LOADING));
  }

  public selectError(): Observable<string> {
    return this.store.pipe(select(CUSTOMERS_ERROR));
  }

  public getCustomers(): void {
    this.store.dispatch(getCustomers());
  }
}
