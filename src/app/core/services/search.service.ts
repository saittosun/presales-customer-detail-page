import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/models/api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) {}

  readonly customers = new Api().customers;

  // changeList(val: string): void {
  //   if (val === null || val === '') {
  //     this.apiService.updateCustomer(this.customers);
  //     return;
  //   }
  //   const customers = this.customers.filter(customer => {
  //     return customer.customerName.toLowerCase().includes(val.toLowerCase()) || customer.projectName.toLowerCase().includes(val.toLowerCase())
  //   })
  //   this.apiService.updateCustomer(customers);
  // }
}

// import { ApiService } from './api.service';
// import { Injectable } from '@angular/core';
// import { Api } from 'src/app/models/api';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {

//   constructor(private apiService: ApiService) {}

//   readonly customers = this.fetchCustomers();

//   changeList(val: string): void {
//     if (val === null || val === '') {
//       this.apiService.updateCustomer(this.customers);
//       return;
//     }
//     const customers = this.customers.filter(customer => {
//       return customer.customerName.toLowerCase().includes(val.toLowerCase()) || customer.projectName.toLowerCase().includes(val.toLowerCase())
//     })
//     this.apiService.updateCustomer(customers);
//   }

//   private fetchCustomers() {
//     let customers;
//     new Api().customers.subscribe(customers => customers = customers);
//     return customers;
//   }
// }
