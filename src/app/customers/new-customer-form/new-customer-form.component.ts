import { LeadFacade } from 'src/app/leads/lead-state/lead.facade';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Countries } from 'src/app/models/countries';
import { Country } from 'src/app/models/country';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-new-customer-form',
  templateUrl: './new-customer-form.component.html',
  styleUrls: ['./new-customer-form.component.scss']
})
export class NewCustomerFormComponent implements OnInit {

  customername: any;
  id: number;
  leadForm: FormGroup;
  customers: Customer[] = [];
  countries: Country [] = new Countries().countries;
  submitted: boolean = false;
  private destroyed$ = new Subject<boolean>();

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private store: LeadFacade) {}

  ngOnInit(): void {
    this.createForm();
  }

  save(val) {
    const customer: Customer = {
      id: Date.now(),
      customerName: val.customerName,
      projectName: val.projectName,
      status: null,
      date: null,
      firstName: val.firstName,
      lastName: val.lastName,
      email: val.email,
      phonenumber: val.phonenumber,
      vat: val.vat,
      address: {
        addressline: val.addressline1,
        city: val.city,
        state: val.state,
        country: val.country,
        zip: val.zip
      },

    }
    this.store.saveCustomer(customer);
    return customer.id;
  }

  private createForm() {
    this.leadForm = this.fb.group({
      customername: new FormControl('', Validators.required),
      addressline1: new FormControl('', Validators.required),
      addressline2: new FormControl(''),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      vat: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("^[0-9]*$"),
      ]),
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmit() {
    this.submitted = true;
    if (this.leadForm.invalid) {
      alert('You must fill the required fields!')
      return;
    };
    const id =  this.save(this.leadForm.value);
    console.log(this.leadForm.value);
    this.router.navigate(['../customer-detail', id], {relativeTo: this.route});
    this.leadForm.reset()
    this.submitted = false;
  }

}
