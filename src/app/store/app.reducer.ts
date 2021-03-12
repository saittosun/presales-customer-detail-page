import { ActionReducerMap } from '@ngrx/store';
import * as fromCustomerDetail from '../customers/customer-store/customer-detail.reducers';
import * as fromLead from '../leads/lead-state/lead.reducers'

export interface AppState {
  reducer: fromCustomerDetail.CustomerDetailState;
  reducers: fromLead.LeadState
}

export const appReducer: ActionReducerMap<AppState> = {
  reducer: fromCustomerDetail.CustomerDetailReducer,
  reducers: fromLead.LeadReducer
}
