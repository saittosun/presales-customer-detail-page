import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
import * as fromCustomer from './lead.reducers';
import * as fromApp from '../../store/app.reducer'

export interface State {
  leadFeature: fromApp.AppState;
}
// export const reducers: ActionReducerMap<State> = {
//   leadFeature: fromCustomer.LeadReducer,
// };

const getCustomerFeatureState =createFeatureSelector<fromApp.AppState>('leadFeature')

export const getCustomers = createSelector(
  getCustomerFeatureState,
  state => {
    return state.reducers.customers
  }
);

export const filterCustomers = createSelector(
  getCustomerFeatureState,
  state => {
    return state.reducers.customers
  }
);

export const getLoaded = createSelector(
  getCustomerFeatureState,
  state => {
    return state.reducers.loaded
  }
);
