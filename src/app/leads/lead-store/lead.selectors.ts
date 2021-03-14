import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
import * as fromCustomer from './lead.reducers';

export interface State {
  leadFeature: fromCustomer.LeadState;
}
export const reducers: ActionReducerMap<State> = {
  leadFeature: fromCustomer.LeadReducer,
};

const getCustomerFeatureState =createFeatureSelector<fromCustomer.LeadState>('leadFeature')

export const getCustomers = createSelector(
  getCustomerFeatureState,
  state => {
    return state.customers
  }
);

export const getLoaded = createSelector(
  getCustomerFeatureState,
  state => {
    return state.loaded
  }
);

export const getSaveCustomer = createSelector(
  getCustomerFeatureState,
  state => {
    return state.customers
  }
);
