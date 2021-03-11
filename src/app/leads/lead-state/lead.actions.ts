import {Action} from "@ngrx/store";
import { Customer } from "src/app/models/customer";

export enum LeadActionTypes {
  Load = '[Customer] Load',
  LoadSuccess = '[Customer] Load Success',
  LoadFail = '[Customer] Load Fail',
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

// Union the valid types
export type LeadActions = Load
  | LoadSuccess
  | LoadFail

