import { CustomerService } from 'src/app/core/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerDetail } from 'src/app/models/customer-detail';
import { CustomerDetailFacade } from '../customer-store/customer-detail.facade';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: CustomerDetail;

  constructor(private store: CustomerDetailFacade,
              private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = this.customerService.getData()
    // this.store.loadCustomers();


    // this.route.params.subscribe((params: Params) => {
    //   console.log(params.id);

    //   this.store.allCustomers$.pipe(take(1), map(customers => {
    //     console.log(customers);
    //     return customers.find(customer => customer.id === +params.id)
    //   }
    //   )).subscribe(customer => this.customer = customer)
    //   console.log(this.customer);
    // })
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}

