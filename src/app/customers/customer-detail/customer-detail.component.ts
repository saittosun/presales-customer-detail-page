import { CustomerService } from 'src/app/core/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerDetail } from 'src/app/models/customer-detail';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerDetail: CustomerDetail;

  constructor(private router: Router,
              private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerDetail = this.customerService.getData()
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}

