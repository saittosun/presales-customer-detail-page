import {Action} from "@ngrx/store";
import { Customer } from "src/app/models/customer";


export enum LeadActionTypes {
  Load = '[Customer] Load',
  LoadSuccess = '[Customer] Load Success',
  LoadFail = '[Customer] Load Fail',
  Filter = '[Customer] Filter',
  FilterDone = '[Customer] FilterDone'
}


export class Load implements Action {
  readonly type = LeadActionTypes.Load;

  constructor() { }
}

export class LoadSuccess implements Action {
  readonly type = LeadActionTypes.LoadSuccess;

  constructor(public payload: Customer[]) { }
}

export class LoadFail implements Action {
  readonly type = LeadActionTypes.LoadFail;

  constructor(public payload: string) {
  }
}

export class Filter implements Action {
  readonly type = LeadActionTypes.Filter;

  constructor(public payload: string) { }
}

export class FilterDone implements Action {
  readonly type = LeadActionTypes.FilterDone;

  constructor(public payload: {results: Customer[]}) { }
}

// Union the valid types
export type LeadActions = Load
  | LoadSuccess
  | LoadFail
  | Filter
  | FilterDone

