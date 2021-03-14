import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { LeadFacade } from 'src/app/leads/lead-store/lead.facade';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(private store: LeadFacade,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.store.allLeads$;
    console.log(this.store.allLeads$);
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      this.store.allLeads$.pipe(take(1), map(customers => {
        console.log(customers);
        return customers.find(customer => customer.id === +params.id)
      }
      )).subscribe(customer => this.customer = customer)
      console.log(this.customer);
    })
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}

