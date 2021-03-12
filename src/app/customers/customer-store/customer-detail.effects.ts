import { Injectable } from '@angular/core';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromCustomer from "./customer-detail.selectors"
import * as customerDetailAction from "./customer-detail.actions";
import { of } from "rxjs/internal/observable/of";
import { CustomerDetailService } from './customer-detail.service';

@Injectable()
export class CustomerDetailEffect {

  constructor(private customerDetailService: CustomerDetailService,
              private action$: Actions,
              private store: Store<any>) {
  }

  public loadProduct$ = createEffect(() =>
   this.action$.pipe(
      ofType(customerDetailAction.CustomerDetailActionTypes.Load),
      withLatestFrom(this.store.pipe(select(fromCustomer.getLoaded))),
      switchMap(([, loaded]) => {
        return this.customerDetailService.getCustomers().pipe(
          map((customers) => {
            return new customerDetailAction.LoadSuccess(customers)
          }),
          catchError(err => of(new customerDetailAction.LoadFail(err)))
        )
      })
    )
  )
}
