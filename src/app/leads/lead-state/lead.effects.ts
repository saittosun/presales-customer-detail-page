import { Injectable } from '@angular/core';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromCustomer from "./lead.selectors"
import * as leadAction from "./lead.actions";
import { of } from "rxjs/internal/observable/of";
import { LeadService } from './lead.service';

@Injectable()
export class LeadEffect {

  constructor(private leadService: LeadService,
              private action$: Actions,
              private store: Store<any>) {
  }

  public loadProduct$ = createEffect(() =>
   this.action$.pipe(
      ofType(leadAction.LeadActionTypes.Load),
      withLatestFrom(this.store.pipe(select(fromCustomer.getLoaded))),
      switchMap(([, loaded]) => {
        return this.leadService.getCustomers().pipe(
          map((customers) => {
            return new leadAction.LoadSuccess(customers)
          }),
          catchError(err => of(new leadAction.LoadFail(err)))
        )
      })
    )
  )
}
