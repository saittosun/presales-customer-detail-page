import { CustomerDetail } from './../models/customer-detail';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CustomerService } from '../core/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  customers: Observable< CustomerDetail[]>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getData()
  }

  ngOnDestroy(): void {}

}
