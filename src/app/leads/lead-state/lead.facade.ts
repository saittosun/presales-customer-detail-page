import { getCustomers } from './lead.selectors';
import { Load } from './lead.actions';
import { select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import * as fromApp from "./lead.reducers";

@Injectable({
  providedIn: 'root'
})

export class LeadFacade {
  allLeads$: Observable<Customer[]> = this.store.pipe(select(getCustomers))

  constructor(private store: Store<fromApp.LeadState>) { }

  loadCustomers() {
    this.store.dispatch(new Load())
  }

}
