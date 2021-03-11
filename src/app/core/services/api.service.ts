import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Api } from 'src/app/models/api';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _customersSub = new BehaviorSubject<Customer[]>( new Api().customers)

  constructor() { }

  get customersSub() {
    return this._customersSub.asObservable();
  }

  updateCustomer(customers: Customer[]) {
    this._customersSub.next(customers)
  }

}
