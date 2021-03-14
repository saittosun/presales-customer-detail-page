import { Customer } from '../../models/customer';
import { LeadActions, LeadActionTypes } from "./lead.actions";

export interface LeadState {
  customers: Customer[],
  loaded: boolean;
  error: string,
}

const initialState: LeadState = {
  customers: [],
  loaded: false,
  error: '',
};


export function LeadReducer(state: LeadState = initialState, action: LeadActions): LeadState {
  switch (action.type) {
  case LeadActionTypes.LoadSuccess:
    return {
      ...state,
      customers: [...action.payload],
      loaded: true,
      error: ''
    }
  case LeadActionTypes.LoadSuccess:
    return {
      ...state,
      customers: [...action.payload],
      loaded: true,
      error: ''
    }
    case LeadActionTypes.SaveCustomer:
      return {
        ...state,
        customers: state.customers.concat(action.payload),
        loaded: true,
        error: ''
      }
      default:
        return state
    }

}


