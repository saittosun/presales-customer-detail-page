import { CustomerDetail } from './../models/customer-detail';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerService } from '../core/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  customers: CustomerDetail[] = [];
  private destroyed$ = new Subject<boolean>();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
   this.customerService.getData()

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
