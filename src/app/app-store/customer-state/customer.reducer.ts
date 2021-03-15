import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import {
  getCustomers,
  getCustomersFailed,
  getCustomersSuccess
} from "./customer.actions";
import { CustomersState, CustomerListState } from "./customer.types";

export const CUSTOMER_INITIAL_STATE: CustomerListState = {
  results: [],
  loading: false,
  error: null
};

export const listReducer = (state: any, action: any) =>
  createReducer(
    CUSTOMER_INITIAL_STATE as any,
    on(getCustomers, (actionState: CustomerListState) => ({
      ...actionState,
      loading: true,
      error: null
    })) as any,
    on(
      getCustomersSuccess,
      (state: CustomerListState, { results }: any) => ({
        ...state,
        results,
        loading: false,
        error: null
      })
    ) as any,
    on(
      getCustomersFailed,
      (state: CustomerListState, { error }: any) => ({
        ...state,
        loading: false,
        error
      })
    ) as any
  );

export const customerReducers: any = {
  list: listReducer
  // detail: detailReducer,
};
