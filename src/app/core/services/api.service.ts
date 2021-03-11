import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Api } from 'src/app/models/api';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // get customersSub() {
  //   return new Api().customers;
  // }

  // updateCustomer(customers: Customer[]) {
  //   this._customersSub.next(customers)
  // }

}
