import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import {throwError} from "rxjs/internal/observable/throwError";
import { CustomerDetail } from 'src/app/models/customer-detail';
import { CustomerDetailApi } from 'src/app/models/customer-detail.api';

@Injectable()
export class CustomerDetailService {

  constructor() {}

  getCustomers(): Observable<CustomerDetail[]> {
    return new CustomerDetailApi().customerDetails;
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
