import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { Country } from 'src/app/models/country';
import { Countries } from 'src/app/models/countries';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomerFacade } from 'src/app/app-store/customer-state/customer.facade';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

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
    private store: CustomerFacade) {}


    ngOnInit(): void {
      this.store.getCustomers();
      // this.store.allLeads$.pipe(take(1)).subscribe(customers => this.customers = customers);
      // console.log(this.customers);
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
    // this.store.saveCustomer(customer);
    // console.log(this.store.loadCustomers());
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
    console.log('burdayim');
    this.submitted = true;
    if (this.leadForm.invalid) {
      alert('You must fill the required fields!')
      return;
    };
    const id = this.save(this.leadForm.value);
    console.log(this.leadForm.value);
    this.router.navigate(['../customer-detail', id], {relativeTo: this.route});
    this.leadForm.reset()
    this.submitted = false;
  }


}

