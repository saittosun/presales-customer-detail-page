import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
import * as fromCustomerDetail from './customer-detail.reducers'

export interface State {
  customerDetailFeature: fromCustomerDetail.CustomerDetailState;
}
export const reducer: ActionReducerMap<State> = {
  customerDetailFeature: fromCustomerDetail.CustomerDetailReducer,
};

const getCustomerFeatureState =createFeatureSelector<fromCustomerDetail.CustomerDetailState>('customerDetailFeature')

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

export const getItemById = (id) => createSelector(
  getCustomerFeatureState,
  state => {
    return state.customers[id]
  }
);
