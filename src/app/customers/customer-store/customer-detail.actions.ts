import {Action} from "@ngrx/store";
import { CustomerDetail } from "src/app/models/customer-detail";

export enum CustomerDetailActionTypes {
  Load = '[CustomerDetail] Load',
  LoadSuccess = '[CustomerDetail] Load Success',
  LoadFail = '[CustomerDetail] Load Fail',
}


export class Load implements Action {
  readonly type = CustomerDetailActionTypes.Load;

  constructor() { }
}

export class LoadSuccess implements Action {
  readonly type = CustomerDetailActionTypes.LoadSuccess;

  constructor(public payload: CustomerDetail[]) { }
}

export class LoadFail implements Action {
  readonly type = CustomerDetailActionTypes.LoadFail;

  constructor(public payload: string) {
  }
}

// Union the valid types
export type CustomerDetailActions = Load
  | LoadSuccess
  | LoadFail

