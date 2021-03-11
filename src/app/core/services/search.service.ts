import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) {}

  readonly customers = new Api().customers;

  changeList(val: string): void {
    if (val === null || val === '') {
      this.apiService.updateCustomer(this.customers);
      return;
    }
    const customers = this.customers.filter(customer => {
      return customer.customerName.toLowerCase().includes(val.toLowerCase()) || customer.projectName.toLowerCase().includes(val.toLowerCase())
    })
    this.apiService.updateCustomer(customers);
  }
}
